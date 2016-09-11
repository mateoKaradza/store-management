import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
    };

    this.pagination = this.pagination.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const next = nextProps.data;
    const current = this.props.data;
    // not the best comparison, but will work in most of the cases
    if (!(next.length === current.length
      && _.isEqual(next[length / 2], current[length / 2])
      && _.isEqual(next[0], current[0])
      && _.isEqual(next[length], current[length])
    ))
      this.setState({ pageNumber: 1 });
  }

  pagination(length) {
    if (length === 0)
      return <button className="btn btn-primary">1</button>;
    const pages = [];
    for (let i = 0; i < length; i++) {
      pages[i] = (
        <button
          key={i}
          onClick={() => this.setState({ pageNumber: i + 1 })}
          className={i + 1 === this.state.pageNumber ? 'btn btn-primary' : 'btn btn-default'}
        >{i + 1}
        </button>
      );
    }
    return pages;
  }

  render() {
    const { children, data } = this.props;
    const pageSize = this.props.pageSize || 15;
    const { pageNumber } = this.state;
    const pageData = data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    return (
      <div>
        <div className="box-body">
          {React.cloneElement(children, { data: pageData })}
        </div>
        <div className="box-footer">
          {data.length} result(s)
          <div className="btn-group pull-right">
            {this.pagination(Math.ceil(data.length / pageSize))}
          </div>
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
};

export default Table;
