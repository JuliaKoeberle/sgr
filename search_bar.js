import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term:''};
    }

    render (){
        return (
            <div>
                <input className="form-control" 
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})} />
                <p className="alert alert-info">Searching for: {this.state.term}</p>
            </div>
        )
    }

    // onInputChage(event) {
    //     console.log(event.target.value);
    // }
}


export default SearchBar;