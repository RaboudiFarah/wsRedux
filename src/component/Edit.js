import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { editTask } from "../JS/actions/action";
const Edit = ({task})=> {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newText, setNewText]= useState(task.Text)
  console.log("newText : " , newText)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit =(e)=>{
        e.preventDefault();
        dispatch(editTask(task.id, newText))
        handleClose()
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          EDIT
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleEdit} >
  <Form.Group className="mb-3" > 
    <Form.Label>EDIT Task</Form.Label>
    <Form.Control type="text" onChange={(e)=>setNewText(e.target.value)} name="text" value={newText} />
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    }
export default Edit