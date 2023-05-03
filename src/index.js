import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Searchbar from './components/Searchbar';
import GridContainer from './components/GridContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Searchbar />
    <GridContainer /> {/* should there be a Main Component and GridContainer inside??*/}
  </React.StrictMode>
);

