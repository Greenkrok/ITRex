/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './Users.scss';

import Loader from '../Loader/Loader';
import Output from './Output/Output';
import Table from './Table/Table';
import Pagination from './Pagination/Pagination';
import Info from './Info/Info';
import DOMAIN_URL from '../../api/constants/DOMAIN_URL';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(`${DOMAIN_URL}`);
    const data = await response.json();
    this.setState({
      isLoading: false,
      data,
    });
  }

  render() {
    return (
      <section className="users">
        <Output />
        {
          this.state.isLoading
            ? <Loader />
            : <Table data={this.state.data} />
        }
        <Pagination />
        <Info />
      </section>
    );
  }
}

export default Users;
