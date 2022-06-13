import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import MyText from 'components/MyText';
import MyTable from 'components/MyTable';

import featureActions from 'redux/feature/actions';
import EditCampaign from '../../LinkBuilder/EditCampaign';

const TrackableLinksTable = () => {
  const parentData = useSelector((state) => state.Feature.parentData);
  const linkBuilderCampaigns = useSelector(
    (state) => state.Feature.linkBuilderCampaigns,
  );
  const [parentDataObj, setParentDataObj] = React.useState({});

  const dispatch = useDispatch();
  const actionStatus = useSelector((state) => state.Status.status);

  useEffect(() => {
    if (
      !(
        Object.keys(parentData).length === 0 &&
        parentData.constructor === Object
      )
    ) {
      dispatch(
        featureActions.getLinkBuilderCampaignRequest(3, parentData.fullData.id),
      );
      setParentDataObj({
        'Links short name': parentData.short_name,
        'Page URL': parentData.page_url,
        Created: parentData.created,
      });
    }
  }, [parentData, dispatch]);

  const handleCopyToClipboard = () => {
    toast.info('Copied to clipboard');
  };

  const [openEditCampaign, setOpenEditCampaign] = React.useState(false);
  const [campaignData, setCampaignData] = React.useState([]);
  const handleEdit = (e) => {
    setCampaignData({
      campaignName: e.name,
      source: e.source,
      medium: e.medium,
      content: e.content,
      enableUtm: false,
    });
    setOpenEditCampaign(true);
  };

  const data = React.useMemo(() => {
    if (linkBuilderCampaigns) {
      let formattedCampaigns;
      formattedCampaigns = linkBuilderCampaigns.map((campaign) => {
        let tempCampaign = campaign;
        tempCampaign = Object.assign({}, tempCampaign, {
          copy: 'Copy',
          edit: 'Edit',
        });
        return tempCampaign;
      });
      return formattedCampaigns;
    }
  }, [linkBuilderCampaigns]);

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        id: 'row',
        style: {
          width: '30px',
        },
        Cell: (data) => {
          return <div>{data.row.index + 1}</div>;
        },
      },
      {
        Header: 'Campaign Attribution Link',
        accessor: 'campaign_attribution_link', // accessor is the "key" in the data
        style: {
          width: 200,
        },
        className: 'u-text-align-left u-border-right-none',
      },
      {
        Header: '',
        accessor: 'copy',
        className: 'u-border-left-none',
        Cell: (data) => {
          return (
            <MyText type="link">
              <CopyToClipboard
                text={data.row.allCells[1].value}
                onCopy={handleCopyToClipboard}
              >
                <span>{data.value}</span>
              </CopyToClipboard>
            </MyText>
          );
        },
      },
      {
        Header: 'Campaign Name',
        accessor: 'name',
        className: 'u-border-left-none',
      },
      {
        Header: 'Source (the referrer)',
        accessor: 'source',
        className: 'u-border-left-none',
      },
      {
        Header: 'Medium (marketing)',
        accessor: 'medium',
        className: 'u-border-left-none',
      },
      {
        Header: 'Content',
        accessor: 'content',
        className: 'u-border-left-none',
      },
      {
        Header: 'Clicks',
        accessor: 'clicks',
        className: 'u-border-left-none',
      },
      {
        Header: '',
        accessor: 'edit',
        style: {
          width: 100,
        },
        className: 'u-border-left-none',
        Cell: (data) => {
          return (
            <MyText type="link" onClick={() => handleEdit(data.row.values)}>
              {data.value}
            </MyText>
          );
        },
      },
    ],
    [],
  );

  const [loader, setLoader] = React.useState(false);
  useEffect(() => {
    if (actionStatus.isFetching) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [actionStatus]);

  return (
    <>
      {openEditCampaign && (
        <EditCampaign
          visibility={openEditCampaign}
          setVisibility={setOpenEditCampaign}
          parentData={parentData}
          campaignData={campaignData}
        />
      )}
      <MyTable
        name="Links - Trackable Links"
        data={data}
        columns={columns}
        trackableParentData={parentDataObj}
        isLoading={loader}
      />
    </>
  );
};

export default TrackableLinksTable;
