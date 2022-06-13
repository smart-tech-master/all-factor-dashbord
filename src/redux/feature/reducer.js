import actions from './actions';
import produce from 'immer';

const initState = {
  user: { name: 'Afonso Barbosa' },
  domains: [],
  hosts: [],
  currentDomainId: '',
  currentDomainOption: '',
  currentHostId:'',
  linkBuilderLinks: [],
  linkBuilderCampaigns: [],
  actions: [],
  content: [],
  attribution: [],
  settings: [],
  account: [],
  overview: [],
  filter: '',
  tableData: [],
  chartData: [],
  tooltipPageData: [],
  tooltipDeviceData: [],
  topCountry: '',
  pagesData: [],

  dateRange: '30 days',
  parentData: {}, // The row you selected currently
};

export default function pageReducer(state = initState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actions.GET_DOMAINS_SUCCESS:
        draft.domains = action.payload;
        if(action.payload){
          draft.currentDomainId = action.payload[0].domain;
        }
        break;
      case actions.UPDATE_DOMAIN_ID_SUCCESS:
        draft.currentDomainId = action.payload;
        break;
      case actions.GET_HOSTS_SUCCESS:
        draft.hosts = action.payload;
        if(action.payload){
          draft.currentHostId = action.payload[0].hostname
        };
        break;
      case actions.UPDATE_HOST_ID_SUCCESS:
        draft.currentHostId = action.payload;
        break;
      case actions.GET_LINKBUILDER_SUCCESS:
        draft.linkBuilderLinks = action.payload;
        break;
      case actions.CREATE_LINKBUILDER_SUCCESS:
        draft.linkBuilderLinks.push(action.payload);
        break;
      case actions.GET_LINKBUILDER_CAMPAIGN_SUCCESS:
        draft.linkBuilderCampaigns = action.payload;
        break;
      case actions.CREATE_LINKBUILDER_CAMPAIGN_SUCCESS:
        draft.linkBuilderCampaigns.push(action.payload);
        break;
      case actions.GET_ACTIONS_REQUEST:
        draft.actions = action.actions;
        break;
      case actions.GET_CONTENT_SUCCESS:
        draft.tableData = action.payload;
        break;
      case actions.GET_ATTRIBUTION_REQUEST:
        draft.attribution = action.linkBuilder;
        break;
      case actions.GET_SETTINGS_REQUEST:
        draft.settings = action.settings;
        break;
      case actions.GET_ACCOUNT_REQUEST:
        draft.account = action.account;
        break;
      case actions.GET_OVERVIEW_REQUEST:
        draft.overview = action.overview;
        break;
      case actions.UPDATE_DATE_RANGE:
        draft.dateRange = action.payload;
        break;
      case actions.UPDATE_PARENT_DATA:
        draft.parentData = action.payload;
        break;
      case actions.UPDATE_FILTER_SUCCESS:
        draft.filter = action.payload;
        break;
      case actions.GET_CHARTDATA_REQUEST_SUCCESS:
        draft.chartData = action.payload;
        break;
      case actions.GET_TOOLTIP_PAGEDATA_REQUEST_SUCCESS:
        draft.tooltipPageData = action.payload;
        break;
      case actions.GET_TOOLTIP_DEVICEDATA_REQUEST_SUCCESS:
        draft.tooltipDeviceData = action.payload;
        break;
      case actions.GET_TOP_COUNTRY_DATA_REQUEST_SUCCESS:
        draft.topCountry = action.payload;
        break;
      case actions.GET_PAGEDATA_REQUEST_SUCCESS:
        draft.pagesData = action.payload;
        break;
      default:
        break;
    }
  });
}
