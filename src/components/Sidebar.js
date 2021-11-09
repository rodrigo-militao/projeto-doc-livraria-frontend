import React, { useState, useEffect } from 'react'
import { getGroups } from '../utils/api'

export default function Sidebar() {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getGroups().then(setGroups)
    }, [])
    return (
        <>
          <ul>
            {groups.map(group => (
                <div key={group.id}>
                    <h4>{group.title}</h4>
                    {group.articles.map(article => (
                        <li key={article.order}>
                            <a href={`/${article.url}`}>{article.title}</a>
                        </li>
                    ))}
                </div>
            ))}
          </ul>
        </>
    )
}
