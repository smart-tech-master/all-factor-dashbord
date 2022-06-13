import React, { useState, useEffect } from 'react';
import produce from 'immer';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';
import ValidationError from 'components/ValidationError';

import featureActions from 'redux/feature/actions';

// import {
//   VALIDATE_URL_REGEX,
//   VALIDATE_SHORTLINK_REGEX,
// } from 'constants';

import './CreateLinks.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: 'calc(100vh - 50px)',
    overflowY: 'scroll',
  },
};

Modal.setAppElement('#modal');

function CreateLinks({ visibility, setVisibility }) {
  const dispatch = useDispatch();
  // react hook form
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(
      featureActions.createLinkBuilderRequest({
        domainId: 3, // for test
        short_name: data.shortname,
        page_url: data.pageUrl,
      }),
    );
    dispatch(
      featureActions.createLinkBuilderCampaignRequest({
        domainId: 3, // for test
        shortLinkId: 6, // for test
        campaignName: data.campaignName0,
        source: data.source0,
        medium: data.medium0,
        content: data.content0,
        enableUtm: data.enableUtm0,
      }),
    );
    closeModal();
  };

  // handle modal box
  const [modalIsOpen, setIsOpen] = React.useState(visibility);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
    setVisibility(false);
  }

  const [campaignsView, setCampaignsView] = useState([]);
  const [campaignViewId, setCampaignViewId] = useState(0);
  const getCampaignFields = () => {
    return (
      <div className="attribution-parameters" key={campaignViewId}>
        <div>
          <Input
            label="Campaign Name"
            type="text"
            name={`campaignName${campaignViewId}`}
            placeholder="e.g. email signature tracking"
            inputRef={register({ required: true })}
          />
          {errors[`campaignName${campaignViewId}`] && (
            <ValidationError>This field is required</ValidationError>
          )}
        </div>
        <div>
          <Input
            label="Source (the referrer)"
            type="text"
            name={`source${campaignViewId}`}
            placeholder="e.g. apple email app"
            inputRef={register({ required: true })}
          />
          {errors[`source${campaignViewId}`] && (
            <ValidationError>This field is required</ValidationError>
          )}
        </div>
        <div>
          <Input
            label="Medium (marketing)"
            type="text"
            name={`medium${campaignViewId}`}
            placeholder="e.g. email"
            inputRef={register({ required: true })}
          />
          {errors[`medium${campaignViewId}`] && (
            <ValidationError>This field is required</ValidationError>
          )}
        </div>
        <div>
          <Input
            label="Content - to difentiate (optional)"
            type="text"
            name={`content${campaignViewId}`}
            placeholder="e.g. logo link or text link"
            inputRef={register}
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="enableUTM"
            ref={register}
            name={`enableUtm${campaignViewId}`}
          />
          <label htmlFor="enableUTM">Enable UTM</label>
        </div>
      </div>
    );
  };

  // const generateKey = (prefix = 'campaignView') => {
  //   return `${prefix}_${new Date().getTime()}`;
  // };
  const updateCampaigns = (state, newCampaignView) => {
    return produce(state, (draft) => {
      draft.push(newCampaignView);
    });
  };

  useEffect(() => {
    setCampaignsView((prev) =>
      // updateCampaigns(prev, getCampaignFields(generateKey())),
      updateCampaigns(prev, getCampaignFields()),
    );
    setCampaignViewId(campaignViewId + 1);
    // eslint-disable-next-line
  }, []);
  const handleAddMoreCampaign = () => {
    setCampaignsView((prev) => updateCampaigns(prev, getCampaignFields()));
    setCampaignViewId(campaignViewId + 1);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-header">
            <Text size="22px" fontWeight="medium">
              Create Links
            </Text>
          </div>

          <div className="modal-body">
            <div className="container-width--half">
              <Input
                label="Page URL"
                labelColor="inputLabel"
                labelFontWeight="medium"
                type="text"
                name="pageUrl"
                placeholder="https://yoursite.com"
                inputRef={register({
                  required: true,
                  // pattern: {
                  //   value: VALIDATE_URL_REGEX,
                  //   message: 'Input correct URL',
                  // },
                })}
              />
              {errors.pageUrl && (
                <ValidationError>This field is required</ValidationError>
              )}

              <Text
                size="14px"
                fontWeight="medium"
                padding="15px 0px 10px"
                color="inputLabel"
              >
                Short links name
              </Text>
              <div className="input-group--special">
                <label>go.allfactors.com/#/&nbsp;</label>
                <input
                  type="text"
                  name="shortname"
                  placeholder="shortname"
                  ref={register({
                    required: true,
                    // pattern: {
                    //   value: VALIDATE_SHORTLINK_REGEX,
                    //   message: 'Input correct shortname',
                    // },
                  })}
                />
              </div>
              {errors.shortname && (
                <ValidationError>This field is required</ValidationError>
              )}
            </div>
            <Text
              size="14px"
              fontWeight="medium"
              padding="15px 0px 10px"
              className="u-margin-top-large"
              color="inputLabel"
            >
              Attribution parameters for each link
            </Text>
            {campaignsView.length &&
              campaignsView.map((campaignView, key) => {
                return campaignView;
              })}
            <Button
              className="default grey"
              type="button"
              onClick={handleAddMoreCampaign}
              disabled
            >
              + Add more
            </Button>
          </div>

          <div className="modal-footer">
            <div className="modal-footer--buttons">
              <div
                onClick={closeModal}
                className="button-margin--right mouse-pointer"
              >
                Close
              </div>
              <Button className="default" type="submit">
                Create link
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default CreateLinks;
