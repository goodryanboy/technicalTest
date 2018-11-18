import React from 'react';
import { Button, CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

import { style } from '../styles/mainStyle';

export default class LoginButton extends React.Component {
  render(){
    const { onPress, disabled } = this.props;
    return (
      <Button 
        title="Sign In" 
        buttonStyle={style.buttonStyle} 
        fontWeight="bold" 
        onPress={onPress}
        disabled={disabled}
      />
    )
  }
}

export const RememberMe = ({checked, click}) => (
  <CheckBox
    title='Remember Me'
    checked={checked}
    uncheckedColor="#878787"
    onIconPress={click}
    containerStyle={style.checkBoxStyle}
  />
)

RememberMe.propTypes = {
  checked: PropTypes.bool,
  click: PropTypes.func
}

RememberMe.defaultProps = {
  checked: false
}