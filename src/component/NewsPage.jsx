import React from 'react';
import { useParams } from 'react-router-dom';
import loading from '../assets/Loading.svg';

function NewsPage({ articles }) {
  const { index } = useParams();
  const article = articles[index];

  if (!article) {
    return <div>
      <span><img src={loading} alt="" className='h-5 animate-spin'/></span>
        <span>Loading</span>
      </div>;
  }

  return (
    <div 
      className='h-screen w-full bg-blend-soft-light bg-gray-500 relative md:rounded-lg' 
      style={{ 
        backgroundImage: `url(${article.urlToImage || 'https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute bottom-10'>
        <div className='w-full bg-transparent flex flex-col p-8'>
          <div className='w-full text-lg font-semibold text-white p-2'>By: {article.author || 'Unknown'}</div>
          <div className='w-full text-2xl font-bold text-white p-2'>{article.title}</div>
          <div className='w-full text-lg font-semibold text-white italic p-2'>
            <strong className='capitalize'>Description: </strong>
            {article.description ? (article.description) : ('Not Mentioned')}
          </div>
          <div className='w-full text-lg font-semibold text-white p-2'>Content : {article.content ? (article.content) : ('Not Mentioned')}</div>
          <div className='w-full text-lg font-semibold text-white p-2 capitalize'>
            Date: {article.date ? new Date(article.date).toLocaleDateString() : 'Not Mentioned'}
          </div>
          <div className='w-full'>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <button className='bg-black py-2 px-5 text-white rounded-full shadow-xl hover:scale-[1.05] transition-transform duration-300 ease-in-out font-bold'>Read more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
