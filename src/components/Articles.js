import React, { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 5000);
  }, []);

  return (
    <div className='articles'>
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className='articles__article' key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles && <div className='articles__loading'>Loading...</div>}
    </div>
  );
};

export default Articles;
