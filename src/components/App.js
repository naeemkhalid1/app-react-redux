import React from "react";
import './App.css';
import Stories from "./Stories";
import SearchStories from './SearchStories';
import Store from '../store/Index'
import { fetchPosts } from '../action/onLoadaction'

// Store.dispatch(fetchPosts());
const App=()=> <div className="app">
     <div className="interactions">
      <SearchStories />
    </div>
    <Stories />
</div>

export default App;