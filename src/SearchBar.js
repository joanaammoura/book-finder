import React, { Component } from 'react';
import './styles/SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    _handleChange(event) {
        this.setState({ value: event.target.value });
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.refresh(this.state.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this._handleSubmit(event)}>
                    <input
                        type="search"
                        placeholder="Search by book title or author..."
                        autoComplete="off"
                        autoFocus="on"
                        onChange={event => this._handleChange(event)}
                        value={this.state.value}
                        className="search-box"
                    />
                    <input type="submit" value="Search" className="search-btn" />
                </form>
            </div>
        );
    }
}
