import React from 'react';
import { Link } from 'react-router-dom';
import loading from '../assets/Loading.svg';

function List({ articles }) {
  return (
    <div className="w-full flex flex-col p-2">
      <div className="w-full text-xl font-sans font-bold capitalize">Articles</div>
      {articles.length === 0 ? (
        <div key="no-news" className="w-full flex flex-row rounded-lg shadow-lg border border-dark_white/20 p-3 mt-4 space-x-2 shrink-0 text-xl font-semibold py-5 items-center pl-3">
          <span><img src={loading} alt="" className='h-5 animate-spin'/></span>
          <span>Loading</span>
        </div>
      ) : (
        articles.map((article, index) => (
          <Link to={`/article/${index}`} key={index}>
            <div className="w-full flex flex-row rounded-lg shadow-lg border border-dark_white/20 p-6 md:p-3 mt-4 space-x-4 shrink-0">
              <div className="w-1/6 flex items-center justify-center">
                <img
                  className="h-4/6/6 md:h-5/6 rounded-md md:rounded-lg"
                  src={article.urlToImage || 'https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  alt="news"
                />
              </div>
              <div className="w-5/6 flex items-center justify-start">
                <div className="w-full h-5/6 flex flex-col">
                  <div className="w-full font-semibold text-sm flex">
                    {article.title || 'No title'}
                  </div>
                  <span className="text-sm font-semibold text-dark_white">By: {article.author || 'not mentioned'}</span>
                  <span className="text-sm font-semibold text-dark_white">
                    {(() => {
                      const currentDate = new Date();
                      const providedDate = new Date(article.date);
                      const timeDifference = currentDate - providedDate;
                      const hoursDifference = Math.abs(timeDifference / (1000 * 60 * 60));
                      if (hoursDifference >= 24) {
                        const daysDifference = Math.floor(hoursDifference / 24);
                        return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
                      } else {
                        return `${Math.floor(hoursDifference)} hour${hoursDifference !== 1 ? 's' : ''} ago`;
                      }
                    })()}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default List;
