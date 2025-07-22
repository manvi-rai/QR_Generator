import React from 'react'

function Header() {
  return (
    <header className='fixed-top'>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold  " href="#">
            <img src="src\assets\logo-1913689_1280.webp" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
              CodeGen
          </a>
          <a href="#qrcode">
          <button class="btn btn-primary " type="button">Get Started</button>
          </a>
        </div>
      </nav>

    </header>
  )
}

export default Header