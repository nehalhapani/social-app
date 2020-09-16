import React, {useState} from 'react';
import LoginStyle from '../assets/styles/LoginStyle';
import {
  AsyncStorage,
  SafeAreaView,
  View,
  Text,
  Switch,
  StatusBar,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-crop-picker';
import {
  validateName,
  validateEmail,
  validatePassword,
  validateSwitch,
  validateSelect,
  validateDate,
  validateConfirmPassword,
} from '../validations/Validation';
import {useScreens} from 'react-native-screens';
const SignupScreen = ({navigation}) => {
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [switchError, setSwitchError] = useState('');
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // console.log(isEnabled);
  const validateInputs = () => {
    let isNameError = nameValidate();
    let isEmailError = emailValidate();
    let isPasswordError = passwordValidate();
    let isConfirmPasswordError = confirmPasswordValidate();
    let isGenderError = genderValidate();
    let isSwitchError = switchValidate();
    let isDateError = dateValidate();

    if (
      isNameError &&
      isPasswordError &&
      isEmailError &&
      isGenderError &&
      isSwitchError &&
      isDateError &&
      isConfirmPasswordError
    ) {
      Alert.alert('Registered Successfully', ' Click Proceed to Continue', [
        {text: 'Proceed', onPress: () => navigation.navigate('SignIn')},
      ]);
    }
  };

  const nameValidate = () => {
    let nameData = validateName(username);
    setUsernameError(nameData);
    if (nameData == '') {
      return true;
    } else {
      return false;
    }
  };
  const emailValidate = () => {
    let emailData = validateEmail(email);
    setEmailError(emailData);
    if (emailData == '') {
      return true;
    } else {
      return false;
    }
  };
  const passwordValidate = () => {
    let passwordData = validatePassword(password);
    setPasswordError(passwordData);
    if (passwordData == '') {
      return true;
    } else {
      return false;
    }
  };
  const confirmPasswordValidate = () => {
    let confirmPasswordData = validateConfirmPassword(
      password,
      confirmPassword,
    );
    setConfirmPasswordError(confirmPasswordData);
    if (confirmPasswordData == '') {
      return true;
    } else {
      return false;
    }
  };
  const dateValidate = () => {
    let dateData = validateDate(date);
    setDateError(dateData);
    if (dateData == '') {
      return true;
    } else {
      return false;
    }
  };
  const genderValidate = () => {
    let genderData = validateSelect(gender);
    setGenderError(genderData);
    if (genderData == '') {
      return true;
    } else {
      return false;
    }
  };

  const switchValidate = () => {
    let switchData = validateSwitch(isEnabled);
    setSwitchError(switchData);
    if (switchData == '') {
      return true;
    } else {
      return false;
    }
  };
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      borderWidth: 1,
      borderColor: 'gray',
      textAlign: 'left',
      padding: 10,
      color: 'black',
      fontSize: 20,
      backgroundColor: 'lightgray',
      color: 'black',
      marginBottom: 2,
      marginTop: 40,
      borderRadius: 8,
      //placeholderColor: 'white',
    },
    inputAndroid: {
      borderWidth: 1,
      borderColor: genderError == '' ? 'gray' : 'red',
      textAlign: 'left',
      padding: 10,
      color: 'black',
      fontSize: 20,
      backgroundColor: 'lightgray',
      marginBottom: 2,
      marginTop: 40,
      borderRadius: 8,
      //placeholderColor: 'white',
    },
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View style={LoginStyle.container}>
          <View style={LoginStyle.mainflex}>
            <View>
              <TextInput
                style={[
                  LoginStyle.username,
                  {borderColor: usernameError == '' ? 'gray' : 'red'},
                ]}
                placeholder="UserName"
                value={username}
                onChangeText={setUsername}
              />

              <Text style={LoginStyle.errortext}>{usernameError}</Text>

              <TextInput
                style={[
                  LoginStyle.username,
                  {borderColor: emailError == '' ? 'gray' : 'red'},
                ]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <Text style={LoginStyle.errortext}>{emailError}</Text>

              <View style={{marginBottom: -30, marginTop: 5}}>
                <DatePicker
                  style={{
                    width: '100%',
                  }}
                  date={date}
                  mode="date"
                  placeholder="Date of birth"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 10,
                      top: 4,
                      marginLeft: 0,
                    },
                    placeholderText: {
                      fontSize: 20,
                      color: 'gray',
                    },
                    dateInput: {
                      // marginLeft: 0,
                      backgroundColor: 'lightgray',
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: dateError == '' ? 'gray' : 'red',
                      height: Platform.OS != 'ios' ? 50 : '100%',
                      textAlign: 'left',
                      padding: 20,
                      alignItem: 'flex-end',
                      fontSize: 20,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    setDate(date);
                  }}
                />
                <Text
                  style={[
                    LoginStyle.errortext,
                    {marginTop: 8},
                    {marginBottom: -1},
                  ]}>
                  {dateError}
                </Text>
              </View>

              <RNPickerSelect
                placeholder={{
                  label: 'Gender',
                  value: '',
                  placeholderTextColor: 'gray',
                }}
                style={pickerSelectStyles}
                value={gender}
                onValueChange={(gender) => setGender(gender)}
                useNativeAndroidPickerStyle={false}
                items={[
                  {label: 'Male', value: 'male'},
                  {label: 'Female', value: 'female'},
                ]}
              />
              <Text style={LoginStyle.errortext}>{genderError}</Text>
              <TextInput
                style={[
                  LoginStyle.username,
                  {borderColor: passwordError == '' ? 'gray' : 'red'},
                ]}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Text style={LoginStyle.errortext}>{passwordError}</Text>
              <TextInput
                style={[
                  LoginStyle.username,
                  {borderColor: passwordError == '' ? 'gray' : 'red'},
                ]}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
              <Text style={LoginStyle.errortext}>{confirmPasswordError}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                paddingRight: 40,
              }}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{alignSelf: 'flex-start'}}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                }}>{`Switch On to indicate that you have read and agree to the term and conditions agreement`}</Text>
            </View>
            <Text style={LoginStyle.errortext}>{switchError}</Text>

            <View style={LoginStyle.buttonupperview}>
              <TouchableOpacity>
                <Text
                  onPress={() => validateInputs()}
                  style={LoginStyle.loginbutton}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignupScreen;
