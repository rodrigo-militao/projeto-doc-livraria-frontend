import React, { useState, useEffect } from 'react'
import { getArticles } from '../utils/api'

export default function Sidebar() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then(setArticles)
    }, [])
    return (
        <>
          <ul>
            {articles.map(article => (
                <li key={article.id}>
                    <a href={`/${article.postId}`}>{article.title}</a>
                </li>
            ))}
          </ul>
        </>
    )
}
