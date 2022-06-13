import React from 'react';
import Modal from 'react-modal';
import Select from 'react-select';

import Button from 'components/Button';
import Input from 'components/Input';
import MyText from 'components/MyText';

import './Alert.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
  },
};

Modal.setAppElement('#modal');

function Alert({ visibility, setVisibility }) {
  const [modalIsOpen, setIsOpen] = React.useState(visibility);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setVisibility(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Settings Alert Modal"
      >
        <div className="modal-header modal-header-modifier">
          <div className="modal-header-modifier-title">Email report alert</div>
        </div>

        <div className="modal-body border-none modal-body-modifier">
          <div className="u-display-flex u-flex-align-center u-margin-top-medium">
            <div className="col-default-2">
              <MyText type="alert-label">Title</MyText>
            </div>
            <div className="col-default-10">
              <Input labelColor="secondary" type="text" placeholder="Title" />
            </div>
          </div>
          <div className="u-display-flex u-flex-align-center u-margin-top-medium">
            <div className="col-default-2">
              <MyText type="alert-label">Every</MyText>
            </div>
            <div className="col-default-10 u-display-flex u-flex-align-center u-flex-justify-between">
              <Select
                className="settings-alert-select"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
              <MyText
                type="alert-label"
                className="u-margin-left-small u-margin-right-small"
              >
                on
              </MyText>
              <Select
                className="settings-alert-select"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
              <MyText
                type="alert-label"
                className="u-margin-left-small u-margin-right-small"
              >
                at
              </MyText>
              <Select
                className="settings-alert-select"
                value={selectedOption}
                onChange={handleChange}
                options={options}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>
          </div>
          <div className="u-display-flex u-flex-align-center u-margin-top-medium">
            <div className="col-default-2">
              <MyText type="alert-label">Send to</MyText>
            </div>
            <div className="col-default-10">
              <Input labelColor="secondary" type="text" placeholder="Email" />
            </div>
          </div>

          <div className="u-display-flex u-flex-align-center u-margin-top-medium">
            <div className="col-default-2"></div>
            <div className="col-default-10">
              <MyText type="link">Add Email</MyText>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-footer--buttons">
            <div
              onClick={closeModal}
              className="button-margin--right mouse-pointer"
            >
              Close
            </div>
            <Button className="default">Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Alert;
