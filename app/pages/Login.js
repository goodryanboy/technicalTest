import React from 'react';
import { View, Image } from 'react-native';
import { observer, inject } from 'mobx-react/native';

import { TextArea ,AutoCompleteText } from '../components/TextArea';
import Button, { RememberMe } from '../components/LoginButton';
import { LOGO } from '../config/const';
import { style } from '../styles/mainStyle';

@inject('store') @observer
export default class Login extends React.Component {

  textChangedEmail = email => this.props.store.email = email;
  
  textChangedPassword = password => this.props.store.password = password;
  
  rememberMe = (email, password) => {
    this.props.store.email = email;
    this.props.store.password = password;
  }

  clicked = () => {
    const { checked } = this.props.store;
    this.props.store.checked = checked ? false : true;
  }

  render(){
    const {
      email, 
      password, 
      disabled,
      errorEmail,
      errorPass, 
      checked,
      users
    } = this.props.store;
    const filterUsers = users.filter(item => item.email.includes(email))
    return (
      <View style={style.loginContainer}>
        <View style={style.imageContainer}>
          <Image source={LOGO} />
        </View>
        <View style={style.formContainer}>
          <View style={style.autoComplete} >
            <AutoCompleteText 
              label="Email"  
              placeholder="Input email address" 
              textChanged={this.textChangedEmail} 
              text={email} 
              errorMessage={errorEmail} 
              users={filterUsers}   
              onPress={this.rememberMe}
            />
          </View>
          <View style={{marginTop: 50}}>
            <TextArea 
              label="Password" 
              placeholder="Input password" 
              textChanged={this.textChangedPassword} 
              text={password} 
              errorMessage={errorPass} 
              max={12} 
              password={true} 
            /> 
            <RememberMe checked={checked} click={this.clicked} />
            <Button onPress={this.props.store.signIn} disabled={disabled} />
          </View>
        </View> 
      </View>
    )
  }
} 