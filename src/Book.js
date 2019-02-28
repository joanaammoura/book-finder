import React, { Component } from "react";
import "./styles/Book.css";

export default class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
        if (this.props.booksList) {
            return (
                <div className="clearfix">
                    <div className="row">
                        {this.props.booksList.map((eachBook, index) => {
                            return (
                                <div className="book-card" key={index}>
                                    <div className="book-card_image"><img src={eachBook.image} alt={eachBook.title} /></div>
                                    <div className="book-card_title">{eachBook.title} </div>
                                    <div className="book-card_author">By: {eachBook.author}</div>
                                    <div className="book-card_publisher">Published By: {eachBook.publisher}</div>
                                    <button className="book-card_link" src={eachBook.infoLink}>See this Book</button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="Error_value-undefined">
                    <img className="Error_value-undefined_img" src="./images/frown.svg"></img>
                    Nothing Here Yet, Try Searching For A Book!
                </div>
            );
        }
    }
}