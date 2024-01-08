import React, {memo} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  email,
  lock,
  userIcon,
  phone,
  logo,
  rememberImg,
  rememberEmpty,
  username,
  emailIcon,
  passwordIcon,
  company,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import {Touchable} from '../../Components/Touchable';
import useRegister from './useRegisterScreen';

const RegisterScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    goBack,
    loginNav,
    signUpButton,
    PolicyValue,
    policy,
  } = useRegister(navigation);
  return (
    <View style={styles.logInMain}>
      <View style={styles.loginTop}>
        <TextComponent text={'Register to'} styles={styles.signInText} />
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={{flexDirection: 'row', position: 'relative'}}>
        <View>
          <InputComponent
            {...{
              name: 'name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'First Name',
              isImage: username,
              defaultValue: '',
              viewStyle: styles.firstNameStyle,
              inputIconStyle: styles.userIconStyle,
              textStyle: styles.userInputStyle,
            }}
          />
        </View>
        <View style={styles.lastNameSt}>
          <InputComponent
            {...{
              name: 'last',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Last Name',
              defaultValue: '',
              viewStyle: styles.nameStyle,
            }}
          />
        </View>
      </View>
      <InputComponent
        {...{
          name: 'company',
          handleSubmit,
          errors,
          reset,
          control,
          getValues,
          placeholder: 'Type Company',
          isImage: company,
          defaultValue: '',
        }}
      />
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
          isImage: passwordIcon,
          defaultValue: '',
          isSecure: true,
          inputIconStyle: styles.lockstyle,
        }}
      />
      <InputComponent
        {...{
          name: 'confirm_password',
          handleSubmit,
          errors,
          reset,
          control,
          getValues,
          placeholder: 'Confirm Password*',
          isImage: passwordIcon,
          defaultValue: '',
          isSecure: true,
          inputIconStyle: styles.lockstyle,
        }}
      />
      <Touchable style={styles.rememberInner} onPress={PolicyValue}>
        <Image
          source={policy ? rememberEmpty : rememberImg}
          style={styles.tickIcon}
        />
        <TextComponent
          styles={styles.tickText}
          text={'Agree to our terms & conditions.'}
        />
      </Touchable>
      <ThemeButton
        title={'Register'}
        onPress={handleSubmit(signUpButton)}
        style={styles.buttonStyle}
      />
      <View style={styles.dontHave}>
        <TextComponent
          text={'Already have an account?'}
          styles={styles.dontHaveText}
        />
        <Touchable onPress={loginNav}>
          <Text style={styles.signUpText}>Log In</Text>
        </Touchable>
      </View>
    </View>
  );
};
export default memo(RegisterScreen);
