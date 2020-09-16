import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
// import Login from './Login';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Page2 from '../screens/Page2';

import {
  AsyncStorage,
  Button,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import AuthContext from '../components/context';

const AuthContext = React.createContext();

import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Users from '../models/Users';
import Home from '../screens/HomePage';
import LoginScreen from '../screens/Login';

function HomeScreen({navigation}) {
  const {signOut} = React.useContext(AuthContext);

  return <Home></Home>;
}

function ProfileScreen({route, navigation}) {
  const {itemID} = route.params;
  const {otherParam} = route.params;
  const [update, setUpdate] = useState();
  return <Page2></Page2>;
}

function SignInScreen({navigation}) {
  return <Login></Login>;
}

function SignUpScreen(navigation) {
  return <Signup></Signup>;
}

const Stack = createStackNavigator();

export default function App({navigation}) {
  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          username: action.id,
          isSignout: false,
          userToken: action.token,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        console.log(foundUser);
        const userToken = string(foundUser[0].userToken);
        const username = foundUser[0].userName;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'SIGN_IN', token: userToken});
      },
    }),
    [],
  );
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {}
      dispatch({type: 'RETRIVE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {loginState.isLoading ? (
            <Stack.Screen name="Splash" component={Splash} />
          ) : loginState.userToken == null ? (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: 'Sign in',
                  animationTypeForReplace: loginState.isSignout
                    ? 'pop'
                    : 'push',
                }}
              />
              {/* <Stack.Screen
                name="SignUp"
                component={SignupScreen}
                options={{
                  title: 'Sign up',
                  animationTypeForReplace: loginState.isSignin ? 'pop' : 'push',
                }}
              /> */}
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
