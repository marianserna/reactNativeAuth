import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  };

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  };

  onLoginFail = () => {
    this.setState({ error: 'Authentication failed 😭', loading: false });
  };

  renderButton = () => {
    const { loading } = this.state;

    if (loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress}>Log in</Button>;
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Email"
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
