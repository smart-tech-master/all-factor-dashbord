import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import featureActions from 'redux/feature/actions';
import MyTable from 'components/MyTable';

import CreateLinks from './CreateLinks/CreateLinks';
import columnsData from './columnsData';

const LinksTable = () => {
  const dispatch = useDispatch();
  const actionStatus = useSelector((state) => state.Status.status);

  // get links data from redux
  const linkBuilderLinks = useSelector(
    (state) => state.Feature.linkBuilderLinks,
  );

  // send request to get links data
  useEffect(() => {
    dispatch(featureActions.getLinkBuilderRequest(3));
    // eslint-disable-next-line
  }, []);

  // format table data
  const columns = React.useMemo(() => columnsData, []);
  const data = React.useMemo(() => linkBuilderLinks, [linkBuilderLinks]);

  // open modal box
  const [openCreateLinks, setOpenCreateLinks] = React.useState(false);

  const handleCreateLinks = (e) => {
    setOpenCreateLinks(e);
  };

  // go to sub page for trackable links
  const history = useHistory();

  const handleTrackableLinks = (row) => {
    const { short_name, page_url, created } = row.values;
    dispatch(
      featureActions.updateParentData({
        short_name,
        page_url,
        created,
        fullData: linkBuilderLinks[row.id],
      }),
    );
    history.push('/link-builder/trackable-links');
  };

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
      {openCreateLinks && (
        <CreateLinks
          visibility={openCreateLinks}
          setVisibility={handleCreateLinks}
        />
      )}
      <MyTable
        name="Links"
        data={data}
        columns={columns}
        action="Create link"
        onActionClick={handleCreateLinks}
        rowClick={true}
        onRowClick={handleTrackableLinks}
        isLoading={loader}
      />
    </>
  );
};

export default LinksTable;
