import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchResults({ results, focusOut }) {
    return (
      <>
        {
          results.length > 0 &&
          <div className="search-results-wrapper">
              {
                results.map((result, index) => (
                  <div onClick={() => focusOut()}>
                  <Link to={`/${result.url}`} key={index} className="search-result" >
                      <div className="search-result-info">
                        {result.title}
                      </div>
                  </Link>
                  </div>
                ))
              }
          </div>
        }  
      </>
    )
}
