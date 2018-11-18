import { StyleSheet, StatusBar } from "react-native";

import { THEME_COLOR, SUB_COLOR } from '../config/const';

export const style = StyleSheet.create({
  loginContainer: { 
    flex: 1, 
    marginTop: StatusBar.currentHeight,
    padding: 0,
    backgroundColor: 'white' 
  },
  imageContainer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  formLabel: { 
    marginLeft: 15, 
    marginTop: 5,
    fontSize: 17, 
    marginBottom: 4, 
    fontWeight: '400', 
    color: '#000'
  },
  formInput: { 
    borderWidth: 2, 
    padding: 8, 
    paddingLeft: 13, 
    borderRadius: 5, 
    borderColor: SUB_COLOR, 
    fontWeight: '400', 
    color: '#000',
    fontStyle: 'normal' 
  },
  formError: {
    marginLeft: 15, 
    marginTop: 0, 
    fontStyle: 'italic' 
  },
  buttonStyle: {
    marginTop: 15, 
    borderRadius: 5, 
    backgroundColor: THEME_COLOR
  },
  checkBoxStyle: {
    marginLeft: 15, 
    paddingTop: 5,
    backgroundColor: 'transparent', 
    borderWidth: 0, 
    padding: 0
  },
  autoComplete: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  listContainerStyle: {
    marginLeft: 15, 
    marginRight: 15, 
    backgroundColor: 'gray'
  }
})