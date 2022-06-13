import { all, takeLatest, fork, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions from './actions';
import statusActions from './../status/actions';
import { getQuery, postQuery } from 'utils/api';
import { getFormattedData, getMonth } from 'utils/chartDataConvert';

const notifyError = (e) => {
  const error = JSON.parse(JSON.stringify(e));
  toast.error(error.message);
};

// Domains
export function* getDomainsRequest() {
  yield takeLatest(actions.GET_DOMAINS_REQUEST, function* () {
    try {
      const response = yield getQuery('/domains/');
      if (response.status === 200) {
        yield put({
          type: actions.GET_DOMAINS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (e) {
      notifyError(e);
    }
  });
}

export function* updateDomainId() {
  yield takeLatest(actions.UPDATE_DOMAIN_ID, function* (payload) {
    const { domainId } = payload;
    try {
      yield put({ type: actions.UPDATE_DOMAIN_ID_SUCCESS, payload: domainId });
    } catch (e) {
      notifyError(e);
    }
  });
}

export function* updateHostId() {
  yield takeLatest(actions.UPDATE_HOST_ID, function* (payload) {
    const { hostId } = payload;
    try {
      yield put({ type: actions.UPDATE_HOST_ID_SUCCESS, payload: hostId });
    } catch (e) {
      notifyError(e);
    }
  });
}

// Hosts
export function* getHostsRequest() {
  yield takeLatest(actions.GET_HOSTS_REQUEST, function* (payload) {
    try {
      const response = yield getQuery(`/domains/${payload.domainId}/get_hostnames/`);
      if (response.status === 200) {
        // find the same host as domain
        let firstHost = response.data.find(o => o.hostname === payload.domainId);

        // regenerate host array
        let host=[];
        host.push(firstHost);
        response.data.map((each) => {
          if(each.hostname !== payload.domainId) host.push(each);
        });

        yield put({
          type: actions.GET_HOSTS_SUCCESS,
          payload: host,
        });
      }
    } catch (e) {
      notifyError(e);
    }
  });
}

// Link Builder Links
export function* getLinkBuilderRequest() {
  yield takeLatest(actions.GET_LINKBUILDER_REQUEST, function* (payload) {
    const { domainId } = payload;
    try {
      yield put(statusActions.startRequest(actions.GET_LINKBUILDER_REQUEST));
      const response = yield getQuery(`/linkredirector/${domainId}/shortlink/`);
      if (response.status === 200) {
        yield put({
          type: actions.GET_LINKBUILDER_SUCCESS,
          payload: response.data,
        });
        yield put(statusActions.finishRequest(actions.GET_LINKBUILDER_REQUEST));
      }
    } catch (e) {
      yield put(
        statusActions.finishRequest(actions.GET_LINKBUILDER_REQUEST, e),
      );
      notifyError(e);
    }
  });
}

export function* createLinkBuilderRequest() {
  yield takeLatest(actions.CREATE_LINKBUILDER_REQUEST, function* (payload) {
    const { domainId, short_name, page_url } = payload.links;
    try {
      const response = yield postQuery(
        `/linkredirector/${domainId}/shortlink/`,
        { short_name, page_url },
      );
      if (response.status === 201) {
        yield put({
          type: actions.CREATE_LINKBUILDER_SUCCESS,
          payload: response.data,
        });
        toast.success('Links created successfully');
      }
    } catch (e) {
      notifyError(e);
    }
  });
}

// Link Builder Campaigns
export function* getLinkBuilderCampaignRequest() {
  yield takeLatest(
    actions.GET_LINKBUILDER_CAMPAIGN_REQUEST,
    function* (payload) {
      const { domainId, shortLinkId } = payload;
      try {
        yield put(
          statusActions.startRequest(actions.GET_LINKBUILDER_CAMPAIGN_REQUEST),
        );
        const response = yield getQuery(
          `/linkredirector/${domainId}/shortlink/${shortLinkId}/campaign/`,
        );
        if (response.status === 200) {
          yield put({
            type: actions.GET_LINKBUILDER_CAMPAIGN_SUCCESS,
            payload: response.data,
          });
          yield put(
            statusActions.finishRequest(actions.GET_LINKBUILDER_REQUEST),
          );
        }
      } catch (e) {
        yield put(
          statusActions.finishRequest(actions.GET_LINKBUILDER_REQUEST, e),
        );
        notifyError(e);
      }
    },
  );
}

export function* createLinkBuilderCampaignRequest() {
  yield takeLatest(
    actions.CREATE_LINKBUILDER_CAMPAIGN_REQUEST,
    function* (payload) {
      const {
        domainId,
        shortLinkId,
        campaignName,
        source,
        medium,
        content,
        enableUtm,
      } = payload.campaigns;
      try {
        const response = yield postQuery(
          `/linkredirector/${domainId}/shortlink/${shortLinkId}/campaign/`,
          {
            name: campaignName,
            source,
            medium,
            content,
            utm_enabled: enableUtm,
          },
        );
        if (response.status === 201) {
          yield put({
            type: actions.CREATE_LINKBUILDER_CAMPAIGN_SUCCESS,
            payload: response.data,
          });
          toast.success('Campaign created successfully');
        }
      } catch (e) {
        notifyError(e);
      }
    },
  );
}

// Actions
export function* getActionsRequest() {
  yield takeLatest(actions.GET_ACTIONS_REQUEST, function* () {
    try {
      // api call
      yield console.log('yield');
    } catch (e) {
      notifyError(e);
    }
  });
}

// Contents
export function* getContentRequest() {
  yield takeLatest(actions.GET_CONTENT_REQUEST, function* (payload) {
    const {
      domainId,
      hostId,
      start,
      end,
      filter,
    } = payload.payload;
    try {
      let response;
      if(filter){
        response = yield getQuery(`/analytics/${domainId}/${hostId}/content/table/?from=${start}&to=${end}&q=${filter}`);
      }else{
        response = yield getQuery(`/analytics/${domainId}/${hostId}/content/table/?from=${start}&to=${end}`);
      }

      if (response.status === 200) {
        yield put({
          type: actions.GET_CONTENT_SUCCESS,
          payload: response.data,
        });
      }

    } catch (e) {
      notifyError(e);
    }
  });
}

// Attributions
export function* getAttributionRequest() {
  yield takeLatest(actions.GET_ATTRIBUTION_REQUEST, function* () {
    try {
      // api call
      yield console.log('yield');
    } catch (e) {
      notifyError(e);
    }
  });
}

// Settings
export function* getSettingsRequest() {
  yield takeLatest(actions.GET_SETTINGS_REQUEST, function* () {
    try {
      // api call
      yield console.log('yield');
    } catch (e) {
      notifyError(e);
    }
  });
}

// Account
export function* getAccountRequest() {
  yield takeLatest(actions.GET_ACCOUNT_REQUEST, function* () {
    try {
      // api call
      yield console.log('yield');
    } catch (e) {
      notifyError(e);
    }
  });
}

// Overview
export function* getOverviewRequest() {
  yield takeLatest(actions.GET_OVERVIEW_REQUEST, function* () {
    try {
      // api call
      yield console.log('yield');
    } catch (e) {
      notifyError(e);
    }
  });
}

// Date Range Picker
export function* updateDateRange() {
  yield takeLatest(actions.UPDATE_DATE_RANGE, function* () {
    try {
      // api call
      yield console.log('yield');
    } catch (e) {
      notifyError(e);
    }
  });
}

// Updatge filter value
export function* updateFilter() {
  yield takeLatest(actions.UPDATE_FILTER, function* (payload) {
    const { filter } = payload; 
    try {
      yield put({
        type: actions.UPDATE_FILTER_SUCCESS,
        payload: filter
      });
    } catch (e) {
      notifyError(e);
    }
  });
}


// get chart data
export function* getChartDataRequest() {
  yield takeLatest(actions.GET_CHARTDATA_REQUEST, function* (payload) {
    const { domainId, hostId, start, end } = payload.payload;
    try {
      let response;
      response = yield getQuery(`/analytics/${domainId}/${hostId}/overview/chart/visitor-growth/?from=${start}&to=${end}`);

      if (response.status === 200) {
        let data = {id: '', data:[]};
        if(response.data.length){
          data.id = getMonth(response.data[0].date);
          data.data = response.data.map((each) => getFormattedData(each));
        }
        yield put({
          type: actions.GET_CHARTDATA_REQUEST_SUCCESS,
          payload: [data],
        });
      }

    } catch (e) {
      notifyError(e);
    }
  });
}

// get tooltip pagedata

export function* getTooltipPageDataRequest() {
  yield takeLatest(actions.GET_TOOLTIP_PAGEDATA_REQUEST, function* (payload) {
    const { domainId, hostId, start, end } = payload.payload;
    try {
      let response = yield getQuery(`/analytics/${domainId}/${hostId}/overview/chart/pages/?from=${start}&to=${end}`);

      if (response.status === 200) {
        yield put({
          type: actions.GET_TOOLTIP_PAGEDATA_REQUEST_SUCCESS,
          payload: response.data,
        });
      }

    } catch (e) {
      notifyError(e);
    }
  });
}

//get tooltip sourcedata

// export function* getSourceDataRequest() {
//   yield takeLatest(actions.GET_TOOLTIP_PAGEDATA_REQUEST, function* (payload) {
//     const { domainId, hostId, start, end } = payload.payload;
//     try {
//       let response = yield getQuery(`/analytics/${domainId}/${hostId}/overview/chart/visitor-growth/?from=${start}&to=${end}`);

//       if (response.status === 200) {
//         yield put({
//           type: actions.GET_TOOLTIP_PAGEDATA_REQUEST_SUCCESS,
//           payload: [data],
//         });
//       }

//     } catch (e) {
//       notifyError(e);
//     }
//   });
// }

// get tooltip devicedata

export function* getTooltipDeviceDataRequest() {
  yield takeLatest(actions.GET_TOOLTIP_DEVICEDATA_REQUEST, function* (payload) {
    const { domainId, hostId, start, end } = payload.payload;
    try {
      let response = yield getQuery(`/analytics/${domainId}/${hostId}/overview/chart/devices/?from=${start}&to=${end}`);

      if (response.status === 200) {
        yield put({
          type: actions.GET_TOOLTIP_DEVICEDATA_REQUEST_SUCCESS,
          payload: response.data,
        });
      }

    } catch (e) {
      notifyError(e);
    }
  });
}

// get top country data

export function* getTopCountryDataRequest() {
  yield takeLatest(actions.GET_TOP_COUNTRY_DATA_REQUEST, function* (payload) {
    const { domainId, hostId, start, end } = payload.payload;
    try {
      let response = yield getQuery(`/analytics/${domainId}/${hostId}/overview/infobox/top-country/?from=${start}&to=${end}`);

      if (response.status === 200) {
        yield put({
          type: actions.GET_TOP_COUNTRY_DATA_REQUEST_SUCCESS,
          payload: (response.data.country?response.data.country:'Nothing'),
        });
      }

    } catch (e) {
      notifyError(e);
    }
  });
}

// get pagedata

export function* getPageDataRequest() {
  yield takeLatest(actions.GET_PAGEDATA_REQUEST, function* (payload) {
    const { domainId, hostId, start, end } = payload.payload;
    try {
      let response = yield getQuery(`/analytics/${domainId}/${hostId}/overview/table/pages/?from=${start}&to=${end}`);

      if (response.status === 200) {
        yield put({
          type: actions.GET_PAGEDATA_REQUEST_SUCCESS,
          payload: response.data,
        });
      }

    } catch (e) {
      notifyError(e);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getDomainsRequest),
    fork(getHostsRequest),
    fork(updateDomainId),
    fork(updateHostId),

    fork(getLinkBuilderRequest),
    fork(createLinkBuilderRequest),

    fork(getLinkBuilderCampaignRequest),
    fork(createLinkBuilderCampaignRequest),

    fork(getActionsRequest),
    fork(getContentRequest),
    fork(getAttributionRequest),
    fork(getSettingsRequest),
    fork(getAccountRequest),

    fork(getOverviewRequest),
    fork(getChartDataRequest),
    fork(getTooltipPageDataRequest),
    // fork(getSourceDataRequest),
    fork(getTooltipDeviceDataRequest),
    
    fork(getTopCountryDataRequest),

    fork(getPageDataRequest),
    
    fork(updateDateRange),
    fork(updateFilter),
  ]);
}
