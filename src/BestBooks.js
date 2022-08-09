import React from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PrintBook from './component/PrintBook';
import EmptyBook from './component/EmptyBook';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showEnpty:false
    }
  }

  getBook=async()=>{
    const allBook= await axios.get('http://localhost:3000/books')
    if(allBook.data.length===0){
      this.setState({
        showEnpty:true
      })
    }else{
    this.setState({
      books:allBook.data
    })
    }
    console.log(allBook.data);
  }

  componentDidMount() {
    this.getBook();
  }


  render() {
    
    return (
      <>
  {this.state.showEnpty?(<EmptyBook />):

      (<Row xs={1} md={3} className="g-4">
      {
        this.state.books.map(ele=>{
          return(
          <>
          <Col>
          <PrintBook book={ele}/>
          </Col>
          </>
          )
        })
      }
      </Row>)};
      </>
    )
  }
}

export default BestBooks;
