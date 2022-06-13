// import React, { useState, useEffect } from 'react';
import React from 'react';

import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import ValidationError from '../../../components/ValidationError';

import featureActions from '../../../redux/feature/actions';

import './EditCampaign.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
  },
};

Modal.setAppElement('#modal');

function EditCampaignModal({
  visibility,
  setVisibility,
  parentData,
  campaignData,
}) {
  const { campaignName, content, enableUtm, medium, source } = campaignData;
  const dispatch = useDispatch();
  // react hook form
  const { register, handleSubmit, formState, errors } = useForm();
  const { isDirty } = formState;

  const onSubmit = (data) => {
    dispatch(
      featureActions.createLinkBuilderCampaignRequest({
        domainId: 3, // for test
        shortLinkId: 2, // for test
        campaignName: data.campaignName,
        source: data.source,
        medium: data.medium,
        content: data.content,
        enableUtm: data.enableUtm,
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

  const getCampaignFields = () => {
    return (
      <div className="attribution-parameters">
        <div>
          <Input
            label="Campaign Name"
            type="text"
            name="campaignName"
            placeholder="e.g. email signature tracking"
            defaultValue={campaignName}
            inputRef={register({ required: true })}
          />
          {errors.campaignName && (
            <ValidationError>This field is required</ValidationError>
          )}
        </div>
        <div>
          <Input
            label="Source (the referrer)"
            type="text"
            name="source"
            placeholder="e.g. apple email app"
            defaultValue={source}
            inputRef={register({ required: true })}
          />
          {errors.source && (
            <ValidationError>This field is required</ValidationError>
          )}
        </div>
        <div>
          <Input
            label="Medium (marketing)"
            type="text"
            name="medium"
            placeholder="e.g. email"
            defaultValue={medium}
            inputRef={register({ required: true })}
          />
          {errors.medium && (
            <ValidationError>This field is required</ValidationError>
          )}
        </div>
        <div>
          <Input
            label="Content - to difentiate (optional)"
            type="text"
            name="content"
            placeholder="e.g. logo link or text link"
            defaultValue={content}
            inputRef={register}
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="enableUTM"
            defaultChecked={enableUtm}
            ref={register}
            name="enableUtm"
          />
          <label htmlFor="enableUTM">Enable UTM</label>
        </div>
      </div>
    );
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
              Edit Campaign
            </Text>
          </div>

          <div className="modal-body">
            <div className="container-width--half">
              <Input
                label="Page URL"
                type="text"
                name="pageUrl"
                disabled
                value={parentData && parentData.page_url}
              />
              <Text size="14px" fontWeight="medium" padding="15px 0px 10px">
                Short links name
              </Text>
              <div className="input-group--special">
                <label>go.allfactors.com/#/&nbsp;</label>
                <input
                  type="text"
                  name="shortname"
                  disabled
                  value={parentData && parentData.short_name}
                />
              </div>
            </div>
            <Text
              size="14px"
              fontWeight="medium"
              padding="15px 0px 10px"
              className="u-margin-top-large"
            >
              Attribution parameters for each link
            </Text>
            {getCampaignFields()}
          </div>

          <div className="modal-footer">
            <div className="modal-footer--buttons">
              <div
                onClick={closeModal}
                className="button-margin--right mouse-pointer"
              >
                Close
              </div>
              <Button className="default" type="submit" disabled={!isDirty}>
                Update campaign
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default EditCampaignModal;
