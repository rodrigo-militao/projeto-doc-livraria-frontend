import React, { useState, useEffect } from 'react'
import { searchArticles } from '../utils/api'
import SearchResults from './SearchResults'

export default function Navbar() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    if (search) {
      searchArticles(search).then(setResults)
    }
    if(search === '') {
      setResults([])
    }
  }, [search])

    return (
      <>
        <div className="fixedHeaderContainer">
          <div className="headerWrapper wrapper">
            <header>
              <a href="/">
                <img 
                className="logo" 
                src="https://weslley.io/media/logo.min.svg" 
                alt="Weslley.io"
                />
              </a>
              <div className="navigationWrapper navigationSlider">
                <nav className="slidingNav">
                  <ul className="nav-site nav-site-internal">
                      <li className="navSearchWrapper">
                        {/* <input 
                          type="text" 
                          placeholder="Pesquisar" 
                          className="search-input"
                          value={search}
                          onChange={handleSearch}
                        /> */}
                        <input 
                          type="text" 
                          id="search_input_react" 
                          placeholder="Pesquisar" 
                          title="Pesquisar" 
                          className="aa-input search-input" 
                          autoComplete="off" 
                          spellCheck="false" 
                          role="combobox" 
                          aria-autocomplete="list" 
                          aria-expanded="false" 
                          aria-labelledby="search_input_react" 
                          aria-owns="algolia-autocomplete-listbox-0" 
                          dir="auto" 
                          style={{position: "relative", verticalAlign: "top"}}
                          value={search}
                          onChange={handleSearch}
                        />
                        <SearchResults 
                          results={results} 
                          focusOut={() => {
                            setResults([])
                            setSearch('')
                            if(document.querySelectorAll('.scroll-to-top')[0]){
                              document.querySelectorAll('.scroll-to-top')[0].click()
                            }
                          }} 
                        />
                      </li>
                      
                    </ul>
                  </nav>
                </div>
              </header>
            </div>
          </div>
      </>
    )
}
