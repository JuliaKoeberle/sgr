import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term:''};
    }

    render (){
        return (
            <div className=" margin-bottom-20">
                <input className="form-control" 
                value={this.state.term}
                onChange={event => this.onInputChage(event.target.value)} placeholder="Search..." />
            </div>
        )
    }

     onInputChage(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
     }
}


export default SearchBar;