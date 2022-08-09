import React from "react";
import Card from 'react-bootstrap/Card';
export default class PrintBook extends React.Component{
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
              </Card.Body>
            </Card>
             </div>
        
    )
        
}

}