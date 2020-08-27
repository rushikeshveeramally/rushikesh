import React from 'react'

const Header = ()=> {
return(
    <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero"><h1><span>R</span>ushikesh <span>V</span>eeramally</h1></a>
        </div>
        <div class="nav-list">
          <div class="hamburger"><div class="bar"></div></div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#services" data-after="Service">TECHNOLOGIES</a></li>
            
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

)
    
}

export default Header;