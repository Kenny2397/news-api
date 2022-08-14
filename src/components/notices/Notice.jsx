import './Notice.css'
export const Notice = ({article}) => {
  return (
    <article key={article.content} className='article'>
      <a href={article.url}>
        <img className='img-article' src={article.urlToImage} alt="img" />
      </a>
      <h3>{article.title}</h3>
      <small>Autor: {article.author ? article.author : "inedit"}</small>
      {/* <span>   {article.publishedAt}</span> */}
      <p>{article.description}</p>
    </article>
  )
}