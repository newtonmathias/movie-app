import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  state = {
    value: ''
  }

  timeout = null;

  doSearch = (e) => {
    this.setState({
      value: e.target.value
    })

    clearTimeout(this.timeout)

    this.timeout = setTimeout( () => {
      this.props.callback(this.state.value)
    }, 500)
  }

  render(){
    return (
      <div>
        <input 
          type="text"
          placeholder="search"
          value={this.state.value}
          onChange={this.doSearch}
        />
      </div>
    )
  }
}

export default SearchBar;