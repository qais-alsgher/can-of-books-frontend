import React from "react"
import Login from './Login'
import Card from 'react-bootstrap/Card';

export default class Welcome extends React.Component{
render(){
    return(
        <div class="space">

<Card style={{ width: '18rem' }} className="cardsPof">
      <Card.Img variant="top" src="https://media.istockphoto.com/photos/books-picture-id949118068?k=20&m=949118068&s=612x612&w=0&h=e8tiaCdluEA9IS_I7ytStcx--toLbovf3U74v-LfNAk="  alt="image book"/>
      <Card.Body>
        <Card.Title>Welcome to Book Store</Card.Title>
        <Card.Text>
                click below to login
        </Card.Text>
        <Login />
      </Card.Body>
    </Card>
     </div>
    )
}



}