import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route, Link
} from "react-router-dom";
import Main from './views/Main';
import Recipe from './views/Recipe';
import RecipeForm from './views/RecipeForm';
import SearchBarResults from './views/SearchBarResults';
import SearchResult from './views/SearchResult';
import ViewCategories from './views/ViewCategories';
import ViewRecipes from './views/ViewRecipes';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/recipe/:id'>
            <Recipe />
          </Route>
          <Route exact path='/recipe/submit/new'>
            <RecipeForm />
          </Route>
          <Route exact path='/recipes'>
            <ViewRecipes />
          </Route>
          <Route exact path='/categories'>
            <ViewCategories />
          </Route>
          <Route exact path='/recipes/results/:category'>
            <SearchResult />
          </Route>
          <Route exact path='/recipes/search/results/:searchBy'>
            <SearchBarResults />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
