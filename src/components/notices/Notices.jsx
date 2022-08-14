import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from '../loading/spinner/Spinner';
import { Notice } from './Notice';
import './Notices.css'
export const Notices = () => {
  const API_KEY = '9e395d2aee4742f791f95a127fbc85b5';
  const country = 'co';
  const category = 'sports'
  const pageSize = 3;


  /**
   * states
   */
  const [articles, setArticles] = useState([]);

  const [spinner, setSpinner] = useState(true);
  
  useEffect(() => {
    setSpinner(true)
    
    console.log('useEffect');
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        
        const articles = res.articles;
        console.log(articles);
        setArticles(articles);
        setSpinner(false);
      })

  }, [])

  console.log('render');

  return (
    <div>
      {
        spinner ? <Spinner /> :
          <section className='articles'>
            <h3>Notices</h3>
            {articles.map(article => (
              <Notice article={article} />
            ))}
          </section>
      }

    </div>
  );

};