import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

function EmailSend() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<<<<<<< HEAD
    <Fragment>
      <div onClick={handleShow} class="fa fa-paper-plane">
      </div>
=======
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
>>>>>>> parent of 1ba753d... Modal

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div style={{padding:"5%"}}>
        <input style={{paddingLeft:"5%",paddingRight:"5%",borderRadius:"5px"}} placeholder="Name"></input>
      </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onSubmit={Post}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
default export EmailSend;