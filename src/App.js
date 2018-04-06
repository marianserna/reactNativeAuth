import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAixAhfej2WHna1z65Q5fTc2b9rPABdgi4',
      authDomain: 'reactnativeauth-22aba.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-22aba.firebaseio.com',
      projectId: 'reactnativeauth-22aba',
      storageBucket: 'reactnativeauth-22aba.appspot.com',
      messagingSenderId: '727195793728'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Thing of Beauty 🐸" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
