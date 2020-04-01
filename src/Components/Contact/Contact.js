import React, { Component } from 'react';

class Footer extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            bestImpression: ''
        },
        userList: []
    }

    //Handle inputs with conditional rendering and append to DOM
    handleChangeFor = (event, propName) => {
        console.log(event.target.value, propName);
        this.setState({
            user: {
                ...this.state.user,
                [propName]: event.target.value
            }
        })
    }

    handleSubmit = () => {
        console.log('Submitting:', this.state.user);
        if (this.state.user.firstName !== '' && this.state.user.lastName !== '' && this.state.user.bestImpression !== '') {
            this.setState({
                user: {
                    firstName: '',
                    lastName: '',
                    bestImpression: ''
                },
                userList: [...this.state.userList, this.state.user]
            })
            alert(`Thanks for joining us ${this.state.user.firstName}`)
        }
        else {
            alert(`Please complete the input form`)
            }
        };

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <input type="text" placeholder="First Name" value={this.state.user.firstName}
                    onChange={(event) => this.handleChangeFor(event, 'firstName')}></input>
                <input type="text" placeholder="Last Name" value={this.state.user.lastName}
                    onChange={(event) => this.handleChangeFor(event, 'lastName')}></input>
                <input type="text" placeholder="Best Impression" value={this.state.user.bestImpression}
                    onChange={(event) => this.handleChangeFor(event, 'bestImpression')}></input>
                <button onClick={this.handleSubmit}>Submit</button>
                <p>Best Impressions:</p>
                {/* {JSON.stringify(this.state)} */}
                <ul>
                    {this.state.userList.map((item) => <li key={item.firstName}>{item.firstName} {item.lastName}'s best impression is of {item.bestImpression}</li>)}
                </ul>
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