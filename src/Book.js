import React, { Component } from "react";
// import "./Book.css";

export default class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    //    componentWillReceiveProps(nextProps) {
    //        this.setState({ booksList: nextProps.eachBook }, () => {
    //            this.props.refresh();
    //        });
    //    }

    render() {
        if (this.props.booksList) {
            return (
                <div className="clearfix">
                    <div className="row">
                        {this.props.booksList.map((eachBook, index) => {
                            return (
                                <div className="book-block" key={index}>
                                    <div className="book-block_image"><img src={eachBook.image} alt={eachBook.title} /></div>
                                    <div className="book-block_title">{eachBook.title} </div>
                                    <div className="book-block_author">By: {eachBook.author}</div>
                                    <div className="book-block_publisher">Published By: {eachBook.publisher}</div>
                                    <button className="book-block_link" src={eachBook.infoLink}>See this Book</button>
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