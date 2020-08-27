import React from 'react'

const Contact = ()=> {
    return (

        <section id="contact">
        <div class="contact container">
          <div><h1 class="section-title">Contact <span>info</span></h1></div>
          <div class="contact-items">
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png"/></div>
              <div class="contact-info">
                <h1>Phone</h1>
                <h2>+91 7702900928</h2>
             
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/></div>
              <div class="contact-info">
                <h1>Email</h1>
                <h2>rushikeshveeramally@gmail.com</h2>
                <h2>rushikesh.veeramally@atos.net</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/></div>
              <div class="contact-info">
                <h1>Address</h1>
                <h2>Hyderabad, India</h2>
              </div>
            </div>
          </div>
        </div>
      </section>


    )
}

export default Contact;
