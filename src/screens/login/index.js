import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {colors} from '../../constants/colors';
import Button from '../../components/Button';
import styles from './styles';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [borderUsername, setBorderUsername] = useState(colors.inputInactive);
  const [borderPassword, setBorderPassword] = useState(colors.inputInactive);

  const [inValidUsername, setInValidUsername] = useState(false);
  const [inValidPassword, setInValidPassword] = useState(false);
  const [errorMsgUsername, setErrorMsgUsername] = useState('');
  const [errorMsgPassword, setErrorMsgPassword] = useState('');

  const handleSignIn = () => {
    if (inValidUsername === false && inValidPassword === false) {
      if (userName.length < 1 && password.length < 1) {
        setErrorMsgUsername('Username is required');
        setInValidUsername(true);
        setErrorMsgPassword('Password is required');
        setInValidPassword(true);
      } else if (userName.length < 1) {
        setErrorMsgUsername('Username is required');
        setInValidUsername(true);
      } else if (password.length < 1) {
        setErrorMsgPassword('Password is required');
        setInValidPassword(true);
      } else if (password.length < 8) {
        setErrorMsgPassword('Must be atleast 8 characters');
        setInValidPassword(true);
      } else {
        navigation.navigate('SideMenuBar');
      }
    } else {
      console.log('Input validation there');
    }
  };

  return (
    <ScrollView
      // scrollEnabled={ Dimensions.get('window').height < 700 ? true : false}
      // bounces={false}
      style={styles.loginContainer}
      keyboardShouldPersistTaps={'handled'}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={[styles.text]}>Sign In to continue</Text>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={[styles.label]}>Username</Text>
          <TextInput
            style={[styles.input, {borderBottomColor: borderUsername}]}
            value={userName}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={currentValue => {
              setUserName(currentValue);
              if (currentValue.length > 1) {
                setInValidUsername(false);
              }
              else if(currentValue.length < 1) {
                setInValidUsername(true);
                setErrorMsgUsername('Username is required');
              }
            }}
            onFocus={() => {
              setBorderUsername(colors.primary);
            }}
            onBlur={() => {
              setBorderUsername(colors.inputInactive);
            }}
          />
          {inValidUsername && (
            <Text style={styles.errorMsg}>{errorMsgUsername}</Text>
          )}
        </View>
        <View style={styles.inputGroup}>
          <Text style={[styles.label]}>Password</Text>
          <TextInput
            style={[styles.input, {borderBottomColor: borderPassword}]}
            value={password}
            secureTextEntry={true}
            // placeholder="Enter your password"
            onChangeText={currentValue => {
              setPassword(currentValue);
              if (currentValue.length > 7) {
                setInValidPassword(false);
              } else if (currentValue.length < 1) {
                setErrorMsgPassword('Password is required');
                setInValidPassword(true);
              } else if (currentValue.length < 8) {
                setErrorMsgPassword('Must be atleast 8 characters');
                setInValidPassword(true);
              }
            }}
            onFocus={() => {
              setBorderPassword(colors.primary);
            }}
            onBlur={() => {
              setBorderPassword(colors.inputInactive);
            }}
          />
          {inValidPassword && (
            <Text style={styles.errorMsg}>{errorMsgPassword}</Text>
          )}
        </View>
      </View>
      <Button title="SIGN IN" onPress={handleSignIn} />

      <View style={styles.signupView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("Forgot Password")}
          >
          <Text style={[styles.signupText, {color: colors.textGrey}]}>
            Forgot password?
            <Text style={[styles.signupText, {color: colors.primary}]}>
              &nbsp;Click here
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("SignUp")}
        >
          <Text style={[styles.signupText, {color: colors.textGrey}]}>
            Don’t have an account?
            <Text style={[styles.signupText, {color: colors.primary}]}>
              &nbsp;Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
