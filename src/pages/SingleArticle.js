import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { getArticle } from '../utils/api'


export default function SingleArticle() {
    const { articleId } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        getArticle(articleId).then(setArticle)
    }, [articleId]);

    return (
        <>
            <div className="postHeader">
                <h1>{article.title}</h1>
            </div>
            <article>
              <MarkdownPreview source={article.content} />
            </article>
        </>
    )
}
