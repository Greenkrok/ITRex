import React from 'react';
import './Output.scss';
import Search from './Search/Search';
import Filter from './Filter/Filter';

const Output = () => (
  <form className="output component">
    <Search />
    <Filter />
  </form>
);

export default Output;
