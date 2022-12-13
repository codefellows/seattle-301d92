import React from 'react';
import BookCarousel from './component/BookCarousel';
import About from './component/About';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    }
  }

  componentDidMount = () => {
    // fetch our books from the backend
    this.requestBooks();
  }

  requestBooks = async () => {
    let response = await axios.get('http://localhost:3001/books');
    this.setState({ books: response.data });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            {this.state.books.length
              ? <Route exact path="/" element={<BookCarousel data={this.state.books} />}></Route>
              : <Route exact path="/" element={<p>Book Collection Empty</p>} />
            }
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
