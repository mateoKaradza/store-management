import React, { Component, PropTypes } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ val: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.val);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control input-sm"
          placeholder="Search for ..."
          onChange={this.handleInputChange}
          value={this.state.val}
        />
        <span className="glyphicon glyphicon-search form-control-feedback" />
      </form>
    );
  }
}

Search.propTypes = {
  action: PropTypes.func.isRequired,
};

export default Search;
