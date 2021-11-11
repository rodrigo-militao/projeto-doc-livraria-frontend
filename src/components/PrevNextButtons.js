import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGroupsContext } from '../context/GroupsContext'

export default function PrevNextButtons({ currentArticle, currentGroupId = 0 }) {
    const { groups } = useGroupsContext()
    const [prevArticle, setPrevArticle] = useState({})
    const [nextArticle, setNextArticle] = useState({})

    useEffect(() => {
        const currentGroup = groups.find(group => group.id === currentGroupId)
        if(currentGroup){
            const orderedArticles = currentGroup.articles.sort((a, b) => a.order - b.order)
            const currentArticleIndex = orderedArticles.findIndex(article => article.url === currentArticle)

            setNextArticle(currentGroup.articles[currentArticleIndex + 1])
            setPrevArticle(currentGroup.articles[currentArticleIndex - 1])
        }
    }, [currentGroupId, currentArticle]) 


    useEffect(() => {
        const currentGroupIndex = groups.sort((a, b) => a.order - b.order).findIndex(group => group.id === currentGroupId)
        if(!nextArticle){
            const nextGroup = groups[currentGroupIndex + 1]
            if(nextGroup){
                nextGroup.articles.sort((a, b) => a.order - b.order)
                setNextArticle(nextGroup.articles[0])
            }
        }
        if(!prevArticle){
            const prevGroup = groups[currentGroupIndex - 1]
            if(prevGroup){
                prevGroup.articles.sort((a, b) => a.order - b.order)
                setPrevArticle(prevGroup.articles[prevGroup.articles.length - 1])
            }
        }
    }, [nextArticle, prevArticle])

    useEffect(() => {
        console.log('groups', groups)
    }, [groups])    

    return (
        <div className="docs-prevnext">
            {
                prevArticle && 
                <Link to={`/${prevArticle.url}`} className="docs-prev button"><i className="fas fa-arrow-left"></i> Anterior</Link>
            }
            {
                nextArticle &&
                <Link to={`/${nextArticle.url}`} className="docs-next button">Próximo <i className="fas fa-arrow-right"></i></Link>
            }
        </div>
    )
}
