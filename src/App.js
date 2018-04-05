import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAixAhfej2WHna1z65Q5fTc2b9rPABdgi4',
      authDomain: 'reactnativeauth-22aba.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-22aba.firebaseio.com',
      projectId: 'reactnativeauth-22aba',
      storageBucket: 'reactnativeauth-22aba.appspot.com',
      messagingSenderId: '727195793728'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Thing of Beauty 🐸" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
