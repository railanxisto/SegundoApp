import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }; //Nao sei se ta logado ou nao

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCbROHF8zuDNTdI3ZMepPDuwkyzDbwskQM',
      authDomain: 'authorization-92dc5.firebaseapp.com',
      databaseURL: 'https://authorization-92dc5.firebaseio.com',
      storageBucket: 'authorization-92dc5.appspot.com',
      messagingSenderId: '931235565066' };
    firebase.initializeApp(firebaseConfig);  
    firebase.database.enableLogging(true);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }); 
  }

  renderContent() {
    console.log('22222222222222222');
    console.log(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        return <CardSection><Button>Log Out</Button></CardSection>;
      case false:
        return <LoginForm />;
      default: 
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Autenticando' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
