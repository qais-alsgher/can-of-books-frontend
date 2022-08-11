import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default class AddBook extends React.Component{


    render(){
        return(
            <>
            <Modal show={this.props.show} onHide={()=>this.props.handleClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.props.handleCreatBook}>
            <fieldset >
            <Form.Group className="mb-3">
                <Form.Label>Title Book</Form.Label>
                <Form.Control id="titleBok" pattern="^[a-zA-Z ]*$"/>
                <Form.Label>Description</Form.Label>
                <Form.Control  id="desBook" pattern="^[a-zA-Z ]*$"/>
                <br/><hr/>
                <Form.Label>Book Status</Form.Label>
                <Form.Control  id="statusBook" pattern="^[a-zA-Z ]*$"/>
            </Form.Group>
            <Button type="submit" >Submit</Button>
            </fieldset>
             </Form>
            
            </Modal.Body>
            </Modal>
            </>
        )
    }
}