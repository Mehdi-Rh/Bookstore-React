import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';
import Navbar from './containers/navbar/Navbar';
import BookPage from './pages/books/BookPage';
import CategoriesPage from './pages/categories/CategoriesPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
