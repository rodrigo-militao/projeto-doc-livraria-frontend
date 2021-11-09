import React, { useState, useEffect } from 'react'

export default function ScrollTop() {
    const [visible, setVisible] = useState(false)

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
      <>
        {visible && 
          <div className="scroll-to-top" onClick={scrollTop}>
            <i className="fas fa-chevron-up"></i>
          </div>
          }
      </>
    )
}
