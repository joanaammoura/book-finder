import React, { Component } from 'react';
import axios from "axios";
import './styles/App.css';
import SearchBar from './SearchBar';
import Book from './Book';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksList: [],
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    refresh = (event) => {
        event.preventDefault();
        let url = `https://www.googleapis.com/books/v1/volumes/?q=${this.state.value}&key=AIzaSyBviPGAJi2aDRF798qy22PYlgWLU71yq_g`;
        axios.get(url).then(response => {
            console.log("success!")
            let booksList = response.data.items;
            let eachBook = booksList.map(book => {
                return {
                    image: book.volumeInfo.imageLinks.thumbnail,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    publisher: book.volumeInfo.publisher,
                    link: book.volumeInfo.infoLink
                };
            });
            this.setState({ booksList: eachBook });
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">BOOK FINDER</header>
                <div className="App-searchbar">
                    <SearchBar refresh={this.refresh} handleChange={this.handleChange} value={this.state.value} />
                </div>
                <div className="App-books">
                    <Book booksList={this.state.booksList} />
                </div>
                <small className="App-link">
                    <a href="https://github.com/joanaammoura/book-finder" rel="noopener noreferrer" target="_blank">Open-source code</a>, with <span role="img">❤️</span> by
      Joana Moura</small>
            </div>
        );
    }
}
