import React, { Component } from 'react';
import './styles/SearchBar.css';

export default class SearchBar extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.refresh}>
                    <input
                        type="search"
                        placeholder="Search by book title or author..."
                        autoComplete="off"
                        autoFocus="on"
                        onChange={this.props.handleChange}
                        value={this.props.value}
                        className="search-box"
                    />
                    <input type="submit" value="Search" className="search-btn" />
                </form>
            </div>
        );
    }
}
