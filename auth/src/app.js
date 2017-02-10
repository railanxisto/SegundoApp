import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAwblqI1YfdOh1EMmgL5WZbX60XaLGnTd0',
        authDomain: 'auth-21abb.firebaseapp.com',
        databaseURL: 'https://auth-21abb.firebaseio.com',
        storageBucket: 'auth-21abb.appspot.com',
        messagingSenderId: '812341703761' });
  }
  
  render() {
    return (
      <View>
        <Header headerText='Autenticando' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
