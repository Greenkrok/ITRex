/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Table.scss';

export default (props) => (
  <table className="table component" border="1" cellPadding="5" cellSpacing="0">
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>E-mail</th>
        <th>Phone</th>
        <th>State</th>
      </tr>
    </thead>
    <tbody>
      { props.data.map((item) => (
        <tr key={item.id + item.phone}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.adress.state}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
