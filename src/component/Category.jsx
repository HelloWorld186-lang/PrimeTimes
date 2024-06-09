import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Category({ onCategoryChange }) {
  const categories = [
    { name: 'business', img: 'https://media.istockphoto.com/id/187231694/photo/businessman-shaking-hands.jpg?b=1&s=612x612&w=0&k=20&c=HsEfKKqgtD0nHHonxJ98d4mKvAc_j_RaWjGnenHWBac=' },
    { name: 'entertainment', img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'general', img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VuZXJhbHxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'health', img: 'https://images.pexels.com/photos/4348638/pexels-photo-4348638.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'science', img: 'https://images.pexels.com/photos/256374/pexels-photo-256374.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'sports', img: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'technology', img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  // Get the current location
  const location = useLocation();
  return (
    <div className="w-full flex flex-col p-2">
      <div className="w-full text-xl font-sans font-bold capitalize">Categories</div>
      <div className="w-full flex overflow-x-scroll space-x-5 scrollbar appearance-none">
        {categories.map(category => (
          <div key={category.name} className="h-28 w-48 flex justify-start items-center p-1 shrink-0">
            <Link
              to={`/${category.name}`}
              onClick={() => onCategoryChange(category.name)}
              className={`category-link ${location.pathname === `/${category.name}` ? 'active-link' : ''}`}
            >
              <span className="flex justify-center items-center space-x-2 font-semibold text-sm">
                <div className={`category-img-container ${location.pathname === `/${category.name}` ? 'active-img' : ''}`}>
                  <img
                    className="h-16 w-16 rounded-full ring-2 ring-offset-2 ring-black"
                    src={category.img}
                    alt={category.name}
                  />
                  {location.pathname === `/${category.name}` && <div className="tick-mark">&#10003;</div>}
                </div>
                <span className="capitalize">{category.name}</span>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;