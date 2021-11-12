import React, { useEffect } from 'react'
import { useGroupsContext } from '../context/GroupsContext'

export default function Home() {
    const { groups } = useGroupsContext()

    useEffect(() => {
        if(groups.length > 0) {
            const firstGroup = groups.sort((a, b) => a.order - b.order)[0]
            const firstArticle = firstGroup.articles.sort((a, b) => a.order - b.order)[0]
            window.location.href = `/${firstArticle.url}`
        }
    }, [groups])

    return <></>
    
}
