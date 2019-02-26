import React, { Component } from "react";
// import "./Book.css";

export default class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this.props.refresh(this.state.value);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value }, () => {
            this.props.refresh();
        });
    }

    render() {
        if (this.state.value) {
            return (
                <div className="clearfix">
                    <div className="row">
                        {this.state.booksList.map((value, index) => {
                            return (
                                <div className="book-block" key={index}>
                                    <div className="book-block_image"><img src={this.state.image} alt="XXX" /></div>
                                    <div className="book-block_title">{this.state.title} </div>
                                    <div className="book-block_author">By: {this.state.author}</div>
                                    <div className="book-block_publisher">Published By: {this.state.publisher}</div>
                                    <button className="book-block_link" src={this.state.infoLink}>See this Book</button>
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