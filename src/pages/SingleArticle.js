import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import MarkdownPreview from '@uiw/react-markdown-preview';
import { getArticle } from '../utils/api'
import PrevNextButtons from '../components/PrevNextButtons';


export default function SingleArticle() {
    const { articleId } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        getArticle(articleId).then(setArticle)
    }, [articleId]);
    return (
        <div className="wrapper">
          {
            article.error ? 
            
            <h1>Artigo não encontrado</h1>
            
            : 
            <>
              <div className="post">
                <header className="postHeader">
                    <h1 className="postHeaderTitle">{article.title}</h1>
                </header>
                <article>
                  <MarkdownPreview source={article.content} />
                </article>
              </div>
              <PrevNextButtons 
                currentArticle={articleId}
                currentGroupId={article.group}
              />
            </>
          }
        </div>
    )
}
