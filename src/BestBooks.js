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
    const allBook= await axios.get('https://deploy-preview-4--snazzy-muffin-82cc1f.netlify.app/books')
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
// delet book
  handleDelete=async(id)=>{

await axios.delete(`https://deploy-preview-4--snazzy-muffin-82cc1f.netlify.app/${id}`);
this.getBook();
}

//add new book
handleCreatBook=async(e)=>{
  e.preventDefault();
  console.log(e.target.titleBok.value);
if(e.target.titleBok.value==="" ||  e.target.desBook.value===""){
console.log("error the data input is empty");
}else{
  const newBook={
    title:e.target.titleBok.value,
    description:e.target.desBook.value,
    status:e.target.statusBook.value
  }
await axios.post(`https://deploy-preview-4--snazzy-muffin-82cc1f.netlify.app/books`,{newBook})
this.getBook();
}}


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
          <PrintBook book={ele} handleDelete={this.handleDelete} handleCreatBook={this.handleCreatBook} getBook={this.getBook}/>
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
