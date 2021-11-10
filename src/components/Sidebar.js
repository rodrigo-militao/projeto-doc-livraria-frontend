import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getGroups } from '../utils/api'

export default function Sidebar() {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getGroups().then(setGroups)
    }, [])

    return (
      <div className="docsNavContainer" id="docsNav">
        <nav className="toc">
          <div className= "toggleNav">
            <section className="navWrapper wrapper">

              <div class="navBreadcrumb wrapper">
                <div class="navToggle" id="navToggler">
                  <div class="hamburger-menu">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                  </div>
                </div>
                  <h2><span>Menu</span></h2>
              </div>

              <div className="navGroups">
                {groups.map(group => (
                    <div className="navGroup" key={group.id}>
                        <h3 className="navGroupCategoryTitle">{group.title}</h3>
                        <ul>
                          {group.articles.map(article => (
                              <li className="navListItem" key={article.order}>
                                  <Link className="navItem" to={`/${article.url}`}>{article.title}</Link>
                              </li>
                          ))}
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
