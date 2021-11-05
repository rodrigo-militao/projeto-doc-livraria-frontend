import React from 'react'
import { useParams } from "react-router-dom";

export default function UpdateArticle() {
    const { articleId } = useParams();
    return (
        <div>
            Aqui iremos atualizar o artigo: {articleId}
        </div>
    )
}
