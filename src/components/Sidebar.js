import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getGroups } from '../utils/api'
import { useGroupsContext } from '../context/GroupsContext'

export default function Sidebar() {
    const { groups, setGroups } = useGroupsContext()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        getGroups().then(setGroups)
    }, [])

    return (
      <div className={`docsNavContainer ${isActive && 'docsSliderActive'}`} id="docsNav">
        <nav className="toc">
          <div className= "toggleNav">
            <section className="navWrapper wrapper">

              <div className="navBreadcrumb wrapper">
                <div 
                  className="navToggle"
                  id="navToggler"
                  onClick={() => setIsActive(!isActive)}
                >
                  <div className="hamburger-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                  </div>
                </div>
                  <h2><span>Menu</span></h2>
              </div>

              <div className="navGroups">
                {groups.map(group => (
                    <div className="navGroup" key={group.id}>
                        <h3 className="navGroupCategoryTitle">{group.title}</h3>
                        <ul>
                          {
                            group.articles.map(article => (
                              <li className="navListItem" key={article.order} onClick={() => setIsActive(false)}>
                                  <Link className="navItem" to={`/${article.url}`}>{article.title}</Link>
                              </li>
                            ))
                          }
                    
                        </ul>
                    </div>
                ))}
              </div>


            </section>
          </div>
        </nav>
      </div>
    )
}
