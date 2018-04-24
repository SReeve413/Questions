import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import MessageList from '../components/MessageList'
// import MessageBox from '../components/MessageBox'
// import Header from '../components/Header'
// import firebase from 'firebase'


class Home extends Component {

    // constructor(props) {
    //     super(props)
    //     const config = {
    //         apiKey: "AIzaSyCi-FJPhilRhEpsTN7dltOQdvxC9PqELBY",
    //         authDomain: "fir-chat-169e0.firebaseapp.com",
    //         databaseURL: "https://fir-chat-169e0.firebaseio.com",
    //         projectId: "fir-chat-169e0",
    //         storageBucket: "",
    //         messagingSenderId: "489203017475"
    //     };
    //     firebase.initializeApp(config);
    // }

    login() {
        this.props.auth.login();
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        console.log(this.props)
        return (
            <div className="container">
                {
                    isAuthenticated() && (
                    <div>
                        <h4>
                            You are logged in! You can now view your{' '}
                            <Link to="profile">profile area</Link>
                            .
                        </h4>

                    </div>


                    )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                            You are not logged in! Please{' '}
                            <a
                                style={{cursor: 'pointer'}}
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </a>
                            {' '}to continue.
                        </h4>
                    )
                }
            </div>
        );
    }
}

export default Home;
