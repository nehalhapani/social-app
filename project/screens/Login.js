import * as React from 'react';
import LoginStyle from '../assets/styles/LoginStyle';
// import AuthContext from '../components/context';

import {
  AsyncStorage,
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AuthContext = React.createContext();

function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [userNameError, setUserNameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);
  const ValidateForm = () => {
    let isNameError = NameValidate();
    let isPasswordError = PasswordValidate();

    if (isNameError && isPasswordError) {
      var results = USER_DATA.filter((item) => {
        return username == item.username && password == item.password;
      });
      if (results.length == 0) {
        console.log('Unsuceesfull!');
        Alert.alert(
          'Invalid Inputs!!',
          'Please enter valid username and password',
        );
      } else {
        signIn({username, password});
      }
    }
  };

  const NameValidate = () => {
    let nameData = validateName(username);
    setUserNameError(nameData);
    if (nameData == '') {
      return true;
    } else {
      return false;
    }
  };
  const PasswordValidate = () => {
    let passwordData = validatePassword(password);
    setPasswordError(passwordData);
    if (passwordData == '') {
      return true;
    } else {
      return false;
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View style={LoginStyle.container}>
          <View style={LoginStyle.mainflex}>
            <View style={LoginStyle.loginfleximage}>
              <Image
                style={LoginStyle.image}
                source={require('../assets/images/login2.png')}
              />
            </View>
            <View>
              <View>
                <TextInput
                  style={[
                    LoginStyle.username,
                    {borderColor: userNameError == '' ? 'gray' : 'red'},
                  ]}
                  placeholder="UserName"
                  value={username}
                  onChangeText={setUsername}
                />
              </View>

              <Text style={LoginStyle.errortext}>{userNameError}</Text>

              <View>
                <TextInput
                  style={[
                    LoginStyle.password,
                    {borderColor: passwordError == '' ? 'gray' : 'red'},
                  ]}
                  placeholder="Password"
                  value={password}
                  secureTextEntry
                  onChangeText={setPassword}
                />
              </View>

              <Text style={LoginStyle.errortext}>{passwordError}</Text>

              <Text style={LoginStyle.forgotpasstext}>Forgot Password ?</Text>
            </View>
            <View style={LoginStyle.buttonupperview}>
              <TouchableOpacity onPress={() => ValidateForm()}>
                <Text style={LoginStyle.loginbutton}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{fontSize: 17, textAlign: 'center', marginTop: 5}}>
                  Not have an account? Create Here!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
