import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class OverdraftModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Ugh Ohhhh, too much money withdrawn</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button onClick={this.props.hideModal}>I Promise not to take out more money :(</Button>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    )
  }
}

export default OverdraftModal;
