import React from 'react';

import {useGlobalContext} from './context';

const Stories = () => {
  const {loading, list,removeStory} = useGlobalContext();
  console.log(loading, '로딩');

  if (loading) {
    return <div className="loading"></div>
  }
  
  return (
    <section className="stories">
      {list.map((item) => {
        console.log(item);
        const {objectID, title, num_comments, url, points, author} = item;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} {''}
              comments
            </p>
            <div>
              <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">
                raed more
              </a>
              <button onClick={()=>removeStory(objectID)} className="remove-btn">remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;