import React, { useState, useEffect } from 'react'
import { getArticles } from '../utils/api'

export default function Home() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then(setArticles)
    }, [])

    return (
        <>
            {
              articles.map(article => (
                  <div class key={article.id}>
                      <a href={`/${article.postId}`}>{article.title}</a>
                  </div>
              ))
            }
        </>
    )
}
