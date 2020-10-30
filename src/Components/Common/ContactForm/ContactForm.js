import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import classes from './contactForm.module.css';
import containerClass from '../../Projects/projects.module.css'
import bgImg from '../../../assets/bg.jpg'
import StickySidebar from '../StickySidebar/StickySidebar';
const ContactForm = () => {
    window.addEventListener("DOMContentLoaded", function () {
        // get the form elements defined in your form HTML above
      
        var form = document.getElementById("my-form");
        // var button = document.getElementById("my-form-button");
        var status = document.getElementById("status");
      
        // Success and Error functions for after the form is submitted
      
        function success() {
          form.reset();
          alert('Message sent successfully.')
        //   status.classList.add("classes.success");
        //   status.innerHTML = "Thanks!";
        }
      
        function error() {
          
            alert('Message sent unsuccessfull.')
        }
      
        // handle the form submission event
      
        form.addEventListener("submit", function (ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
      
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }
    return (
        <section>
            <div className={containerClass.ProjectsContainer}>
            <img src={bgImg} className={containerClass.bgImg} alt=""/>
            <NavigationBar></NavigationBar>
            <StickySidebar></StickySidebar>
            <div className={classes.container}>
                <div className="contactInfo">
                    <h4>My email: isakil416@gmail.com <br/> Or, send me a message immediately. </h4>
                </div>
                <form action="https://formspree.io/meqpkaqv" method="POST" id="my-form">

                <div className={classes.formGroup}>
                    <label for="firstName"> First Name</label>
                    <input type="text" id="firstName" name="firstName" />
                </div>

                <div className={classes.formGroup}>
                    <label for="latsName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" />
                </div>

                <div className={classes.formGroup}>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div className={classes.formGroup}>
                    <label for="massage">Massage</label>
                    <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
                </div>

                <button type="submit">Submit</button>
                </form>
            </div>
            <div id="status"></div>
            </div>
        </section>
    );
};

export default ContactForm;