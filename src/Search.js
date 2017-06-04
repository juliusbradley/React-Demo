import React, { Component } from 'react';


// props
// - data: an array of strings
// - onEnter: a callback that will be called with search results
class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      query: ''
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery (event) {
    // console.log(event.target.value);
    this.setState({query: event.target.value});
  }

  renderData () {

    const { query } = this.state;

    return this.props.data
      .filter(function (value) {
        return new RegExp(query).test(value);
      })
      .map(function (value, index) {
        // when rendering arrays of components, you must provide
        // each component with a key prop. That prop should be a uniquer
        // identifier. (e.g. when rendering data from database, use the
        // row id for the key prop)
        return <li key={index}>{value}</li>
      })
  }

  render() {
    return (
      <div className="search">
        <input
          onChange={this.updateQuery}
          type="text"/>
        <ul>
          { this.renderData() }
        </ul>
      </div>
    )
  }
}

Search.defaultProps = {
  data: []
}

export default Search;
History
