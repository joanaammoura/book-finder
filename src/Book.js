import React, { Component } from "react";
import "./styles/Book.css";

export default class Book extends Component {

    render() {
        return (
            <div className="clearfix">
                <div className="row">
                    {this.props.booksList.map((eachBook, index) => {
                        return (
                            <div className="book-card" key={index}>
                                <div className="book-card_image"><img src={eachBook.image} alt={eachBook.title} /></div>
                                <div className="book-card_title">{eachBook.title} </div>
                                <div className="book-card_author">By: {eachBook.authors}</div>
                                <div className="book-card_publisher">Published By: {eachBook.publisher}</div>
                                <button className="book-card_link" src={eachBook.infoLink}>See this Book</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}