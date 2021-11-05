import React from 'react'
import { useParams } from "react-router-dom";

export default function SingleArticle() {
    const { articleId } = useParams();
    return (
        <div>
            Aqui pegarei o artigo pelo id dele: {articleId}
        </div>
    )
}
