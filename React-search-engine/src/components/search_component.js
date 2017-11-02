import React, { Component } from 'react';

class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            term:''
        };
    }
    onKeyChange(term){
        this.setState({term});
        this.props.onkeyChange(term);
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                    <form className="navbar-form">
                    <div className="form-group col-md-12">
                        <input type="text" value={this.state.term} onChange={event=>{this.onKeyChange(event.target.value)}}  className="form-control" placeholder="Typeahead to Search..." />
                    </div>
                    </form>
            </nav>
        );
    }
}

export default SearchComponent;