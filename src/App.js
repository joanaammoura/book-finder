import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SearchBar from './SearchBar';
import Book from './Book';
import Api from './Api';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    refresh = () => {
        let url = `${Api.url}${this.state.value}${Api.key}`;
        axios.get(url).then(response => {
            let booksList = response.items;
            let eachBook = booksList.map(index => {
                return {
                    image: booksList[index].volumeInfo.imageLinks.thumbnail,
                    title: booksList[index].volumeInfo.title,
                    author: booksList[index].volumeInfo.authors[0],
                    publisher: booksList[index].volumeInfo.publisher,
                    link: booksList[index].volumeInfo.infoLink
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
                    <SearchBar refresh={this.refresh} />
                </div>
                <div className="App-books">
                    <Book refresh={this.refresh} />
                </div>
                <small className="App-link">
                    <a href="https://github.com/joanaammoura/book-finder" rel="noopener noreferrer" target="_blank">Open-source code</a>, with <span role="img">❤️</span> by
      Joana Moura</small>
            </div>
        );
    }
}
