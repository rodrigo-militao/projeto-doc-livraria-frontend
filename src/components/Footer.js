import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="nav-footer" id="footer">
            <section className="sitemap">
            <Link to="/" className="nav-home">
              <img 
                src="https://weslley.io/media/logo.min.svg" 
                alt="Weslley.io"
                width="66" 
                height="58"
              />
            </Link>

            <div></div>
            <div></div>
            <div></div>

            </section>
        </footer>
    )
}
