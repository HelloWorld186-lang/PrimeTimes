import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import { List, NavBar, NewsPage, Category } from './component';

function App() {
  const ApiKey = import.meta.env.VITE_API_KEY;

  const categories = {
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    health: 'health',
    science: 'science',
    sports: 'sports',
    technology: 'technology',
  };

  const [articlesArray, setArticlesArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('business'); // Default to 'general' category

  const fetchArticles = async (category) => {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=e6eafc17cdd84f858b9ded78440eb83e`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const articles = data.articles;
      const articleArray = articles.map(article => ({
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        date: article.publishedAt,
        content: article.content,
      }));
      setArticlesArray(articleArray);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching the news articles:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(selected);
  }, [selected]);

  const handleCategoryChange = (category) => {
    setSelected(category);
  };

  return (
    <div className="h-full w-full flex flex-col overflow-y-scroll sc p-0 md:p-8 mx-auto scrollbar appearance-none">
      <BrowserRouter>
        <NavBar />
        <Category onCategoryChange={handleCategoryChange} />
        <Routes>
          <Route path="/" element={<List articles={articlesArray} />} />
          {Object.keys(categories).map(category => (
            <Route
              key={category}
              path={`/${category}`}
              element={
                <CategoryPage
                  category={category}
                  fetchArticles={fetchArticles}
                  articles={articlesArray}
                  onCategoryChange={handleCategoryChange}
                />
              }
            />
          ))}
          <Route path="/article/:index" element={<NewsPage articles={articlesArray} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const CategoryPage = ({ category, fetchArticles, articles, onCategoryChange }) => {
  useEffect(() => {
    onCategoryChange(category);
  }, [category]);

  return <List articles={articles} />;
};

export default App;
