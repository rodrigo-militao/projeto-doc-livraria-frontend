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
                  <div key={article.id}>
                      <a href={`/${article.id}`}>{article.title}</a>
                  </div>
              ))
            }
        </>
    )
}
