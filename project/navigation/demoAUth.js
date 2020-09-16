import * as React from 'react';
import {
  AsyncStorage,
  Button,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomePage';
import LoginStyle from '../assets/styles/LoginStyle';
import LoginScreen from '../screens/Login';
import {
  validateName,
  validatePassword,
  validateEmail,
} from '../validations/Validation';
import SplashScreen from '../screens/Splash';
import SignupScreen from '../screens/Signup';
// import RootStack from '../navigation/Stack';
import ProfileScreen from '../screens/Page2';
import DrawerNavigation from './Drawer';

const AuthContext = React.createContext();

function Home() {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View>
      <Button title="Sign out" onPress={signOut} />
      <HomeScreen />
    </View>
  );
}

const USER_DATA = [
  {username: 'nehal', password: 'Nehal@12345'},
  {username: 'test', password: 'Test@12345'},
];
function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [userNameError, setUserNameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [modalEmail, setModalEmail] = React.useState('');
  const [modalEmailError, setModalEmailError] = React.useState('');

  const {signIn} = React.useContext(AuthContext);
  const {signUp} = React.useContext(AuthContext);

  const ValidateForm = () => {
    let isNameError = NameValidate();
    let isPasswordError = PasswordValidate();
    let isModalEmailError = ModalEmailValidate();

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
  const ModalEmailValidate = () => {
    let emailData = validateEmail(modalEmail);
    setModalEmailError(emailData);
    if (emailData == '') {
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
              <View>
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <Text style={LoginStyle.forgotpasstext}>
                    Forgot Password ?
                  </Text>
                  <View>
                    <Modal
                      visible={visible}
                      animationType="slide"
                      transparent={true}>
                      <View
                        style={{
                          margin: 0,
                          flex: 1,
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          padding: 40,
                        }}>
                        <>
                          <View style={{marginTop: 300}}>
                            <TextInput
                              style={[
                                LoginStyle.username,
                                {
                                  borderColor:
                                    modalEmailError == '' ? 'gray' : 'red',
                                },
                              ]}
                              placeholder="Email"
                              value={modalEmail}
                              onChangeText={setModalEmail}
                            />

                            <Text style={LoginStyle.errortext}>
                              {modalEmailError}
                            </Text>
                          </View>
                          <View>
                            <TouchableOpacity onPress={() => ValidateForm()}>
                              <Text
                                style={
                                  LoginStyle.modalButton
                                }>{`Send Email`}</Text>
                            </TouchableOpacity>
                          </View>
                          <View>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                              <Text
                                style={LoginStyle.modalButton}>{`Close`}</Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      </View>
                    </Modal>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={LoginStyle.buttonupperview}>
              <TouchableOpacity onPress={() => ValidateForm()}>
                <Text style={LoginStyle.loginbutton}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
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

const Stack = createStackNavigator();

export default function App({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {}
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        dispatch({type: 'SIGN_UP'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {state.isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  title: 'Sign in',
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignupScreen}
                options={{
                  title: 'Sign up',
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            </>
          ) : (
            <Stack.Screen
              headerMode="none"
              name="Drawer"
              component={DrawerNavigation}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
