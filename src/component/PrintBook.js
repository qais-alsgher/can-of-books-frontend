import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AddBook from "./AddBook";
import UpdatBook from "./UpdatBook";
export default class PrintBook extends React.Component{
  constructor(props){
    super(props);

    this.state={
      show:false,
      showUp:false
    }
  }
  
// handleCreatBook=()=>{ does not used this when take data from form
//   this.props.handleCreatBook();
// };

handleShow=()=>{
this.setState({
  show:true
})
};

handleClose=()=>{
  this.setState({
    show:false
  })
};
handleShowUp=()=>{
  this.setState({
    showUp:true
  })
};
handleCloseUp=()=>{
  this.setState({
    showUp:false
  })
};



render(){
  
    return(
         
        <div class="space">
        <Card style={{ width: '18rem' }} className="cardsPof">
              <Card.Img variant="top" src="https://media.istockphoto.com/photos/books-picture-id949118068?k=20&m=949118068&s=612x612&w=0&h=e8tiaCdluEA9IS_I7ytStcx--toLbovf3U74v-LfNAk="  alt="image book"/>
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text>
                       {this.props.book.description}
                       <br/>
                       {this.props.book.status}
                </Card.Text>
                <Button variant="primary" onClick={()=>this.props.handleDelete(this.props.book._id)}>Delete Book</Button>
                <Button variant="primary" onClick={this.handleShow}>Add New Book</Button>
                <Button variant="primary" onClick={this.handleShowUp}>Updat</Button>
              </Card.Body>
            </Card>
            {/* to print new books */}
            <AddBook 
            show={this.state.show}
            handleCreatBook={this.props.handleCreatBook}
            handleShow={this.handleShow}
            handleClose={this.handleClose}
            />
            {/* to updat books */}
            <UpdatBook
             id={this.props.book._id}
             showUp={this.state.showUp}
             handleShowUp={this.handleShowUp}
             handleCloseUp={this.handleCloseUp}
             getBook={this.props.getBook}/>
             </div>
        
    )
        
}

}