import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div class="Contact-info">
            <h2>Contact</h2>
            <input type="text" id="f-name" placeholder="First Name"></input>
            <input type="text" id="l-name" placeholder="Last Name"></input>
            <input type="text" id="impression" placeholder="Best Impression"></input>
            <p id="append"></p>
            <p>Phone: 555-123-4567</p> 
            <p>Email: PowerIsLife@UmbrellaCorp.com</p>
            </div>
            );
            //TODO- handle inputs with conditional rendering and append to DOM if all inputs !== ''
            //          Add alert- "Thank You!"
            //          Form clears after click
            }
    }

export default Footer;