import React, {memo} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  email,
  emailIcon,
  lock,
  logo,
  mainImage,
  passwordIcon,
  rememberEmpty,
  rememberImg,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import useLogin from './useLoginScreen';
import {Touchable} from '../../Components/Touchable';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';

const LoginScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    onPress,
    loginUser,
    appleIdlogin,
    googleLoginFunc,
    facebookLoginFunc,
    rememberValue,
    remember,
  } = useLogin(navigation);
  return (
    <KeyBoardWrapper
      styles={styles.logInMain}
      showsVerticalScrollIndicator={false}>
      <View style={styles.loginTop}>
        <Image
          source={mainImage}
          style={styles.mainImage}
          resizeMode="contain"
        />
        <TextComponent text={'Log in to'} styles={styles.signInText} />
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.loginBottom}>
        <InputComponent
          {...{
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Email*',
            isImage: emailIcon,
            defaultValue: '',
          }}
        />
        <InputComponent
          {...{
            name: 'password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Password*',
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            isImage: passwordIcon,
            inputIconStyle: styles.lockstyle,
          }}
        />
        <View style={styles.rememberSec}>
          <TextComponent
            text={'Forgot Password?'}
            styles={styles.forgetText}
            onPress={() => navigation.navigate('ForgetPasswordScreen')}
          />
        </View>
        <ThemeButton onPress={handleSubmit(loginUser)} title={'Log In'} />
        <View style={styles.dontHave}>
          <TextComponent
            text={'Don’t have an account?'}
            styles={styles.dontHaveText}
          />
          <Touchable onPress={onPress}>
            <Text style={styles.signUpText}>Register</Text>
          </Touchable>
        </View>
      </View>
    </KeyBoardWrapper>
  );
};
export default memo(LoginScreen);
