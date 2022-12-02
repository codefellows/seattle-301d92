import React from "react";
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.hideModal}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>
                {this.props.beast.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.beast.description}
              <Image fluid src={this.props.beast.image_url} />
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}
export default SelectedBeast;