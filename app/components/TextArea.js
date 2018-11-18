import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Autocomplete from 'react-native-autocomplete-input';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import { style } from '../styles/mainStyle';

export const TextArea = (props) => {
  const { 
    text, 
    label, 
    errorMessage, 
    password,
    placeholder,
    textChanged,
    max 
  } = props;
  return (
    <View>
      <FormLabel labelStyle={style.formLabel}>{label}</FormLabel>
      <FormInput 
        inputStyle={style.formInput} 
        secureTextEntry={password} 
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        value={text}
        onChangeText={textChanged}  
        maxLength={max}
      />
      <FormValidationMessage labelStyle={style.formError}>{errorMessage}</FormValidationMessage>
    </View>
  )
}

export const AutoCompleteText = (props) => {
  const { text, users, onPress } = props;
  //use to hide result
  const comp = (a, b) => a === b;
  
  return (
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        hideResults={text.length > 0 ? false : true}
        data={users.length === 1 && comp(text, users[0].email) ? [] : users}
        defaultValue={text}
        inputContainerStyle={{borderWidth: 0}}
        listContainerStyle={style.listContainerStyle}
        listStyle={{margin: 0, padding: 5}}
        renderTextInput={()=> (
          <TextArea {...props}  />
        )}
        renderItem={({ email, password }) => (
          <TouchableOpacity onPress={() => onPress(email, password)} >
            <Text >
              {email} 
            </Text>
          </TouchableOpacity>
        )}
      />
  )
}

TextArea.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  password: PropTypes.bool,
  placeholder: PropTypes.string,
  max: PropTypes.number
}

TextArea.defaultProps = {
  text: '',
  label: '',
  password: false,
  errorMessage: '',
  placeholder: ''
}