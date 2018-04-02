import React from 'react';
import { render } from 'react-dom';
import BlogList from './blogList';
import "./index.css";

const App = () => (
  <div className="red">
    <BlogList/>
  </div>
);

render(<App />, document.getElementById('root'));
