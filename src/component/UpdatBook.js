import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default class UpdatBook extends React.Component{
    // refrsh data for get 
    getBook=()=>{
        this.props.getBook();
    }
    // update data for put 
    handleUpdatBook=async(e)=>{
        e.preventDefault();
        const dataUpdat = {
            title:e.target.titleBok.value,
            description:e.target.desBook.value,
            status:e.target.statusBook.value
          }
          await axios.put(`https://books-store-code.herokuapp.com/books/${this.props.id}`,{dataUpdat});
          this.getBook();
    }


    render(){
        return(
            <>
            <Modal show={this.props.showUp} onHide={()=>this.props.handleCloseUp()}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.handleUpdatBook}>
            <fieldset >
            <Form.Group className="mb-3">
                <Form.Label>Modify Title Book </Form.Label>
                <Form.Control id="titleBok" pattern="^[a-zA-Z ]*$"/>
                <Form.Label>Modify Description</Form.Label>
                <Form.Control  id="desBook" pattern="^[a-zA-Z ]*$"/>
                <br/><hr/>
                <Form.Label>Modify Book Status</Form.Label>
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