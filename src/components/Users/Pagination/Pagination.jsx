import React from 'react';
import './Pagination.scss';

const Pagination = () => (
  <div className="page-navigation component">
    <button className="btn prev" type="button"> Previous </button>
    <ul className="page-navigation__list" />
    <button className="btn next" type="button"> Next </button>
  </div>
);

export default Pagination;
