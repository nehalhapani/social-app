import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 5,
  },
  mainflex: {
    padding: 40,
    borderWidth: 3,
    borderColor: 'teal',
    borderRadius: 6,
  },
  loginfleximage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  username: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 0,
    backgroundColor: 'lightgray',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  password: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'lightgray',
    fontSize: 20,
    borderWidth: 1,
  },
  forgotpasstext: {
    textAlign: 'right',
    marginTop: 20,
    fontSize: 15,
    opacity: 0.6,
  },
  buttonupperview: {
    marginTop: 30,
    borderRadius: 30,
  },
  loginbutton: {
    borderRadius: 8,
    padding: 15,
    backgroundColor: 'teal',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  errortext: {
    color: 'red',
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 10,
  },
  modalButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'teal',
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    borderRadius: 8,
  },
});
