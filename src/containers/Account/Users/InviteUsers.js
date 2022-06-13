import React from 'react';
import Modal from 'react-modal';

import Button from '../../../components/Button';
import Text from '../../../components/Text';
import Input from '../../../components/Input';

import './InviteUsers.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
  },
};

Modal.setAppElement('#modal');

function InviteUsers({ visibility, setVisibility }) {
  const [modalIsOpen, setIsOpen] = React.useState(visibility);

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
        contentLabel="Example Modal"
      >
        <div className="modal-header modal-header-modifier">
          <div className="modal-header-modifier-title">Invite User</div>
        </div>

        <div className="modal-body border-none modal-body-modifier">
          <Input
            label="Email"
            labelColor="secondary"
            type="text"
            placeholder="https://yoursite.com"
          />

          <Text
            size="14px"
            fontWeight="normal"
            padding="15px 0px 10px"
            color="secondary"
          >
            Role
          </Text>
          <div className="attribution-parameters">
            <div>
              <Input label="Admin" type="radio" />
            </div>
            <div>
              <Input label="Editor" type="radio" />
            </div>
            <div>
              <Input label="Viewer" type="radio" />
            </div>
            <div>
              <Input label="Agency" type="radio" />
            </div>
          </div>
          <p>
            Administrators have full access to AllFactors. They can view and
            customize all fields including adding new users
          </p>
        </div>

        <div className="modal-footer">
          <div className="modal-footer--buttons">
            <div
              onClick={closeModal}
              className="button-margin--right mouse-pointer"
            >
              Cancel
            </div>
            <Button className="default">Send Invite</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default InviteUsers;
