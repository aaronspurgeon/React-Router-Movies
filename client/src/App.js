import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route path='/'
      render={props => <SavedList list={savedList} {...props} />} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie}/>
    </div>
  );
};

export default App;
