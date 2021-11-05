import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { getArticle } from '../utils/api'


export default function SingleArticle() {
    const { articleId } = useParams();
    const [article, setArticle] = useState({});
    useEffect(() => {
        getArticle(articleId).then(setArticle)
    }, [articleId])
    return (
        <>
            <div>
                <h2>{article.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: article.content}}></div>
            </div>
        </>
    )
}
