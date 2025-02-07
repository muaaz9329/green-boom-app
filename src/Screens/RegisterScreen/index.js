import React, {memo} from 'react';
import {View, Text, Image, ScrollView, Linking} from 'react-native';
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
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';

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
    <KeyBoardWrapper
      styles={styles.logInMain}
      showsVerticalScrollIndicator={false}>
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
              name: 'last_name',
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
          name: 'company_name',
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
      <View style={styles.termsMain}>
        <Touchable style={styles.rememberInner} onPress={PolicyValue}>
          <Image
            source={policy ? rememberEmpty : rememberImg}
            style={styles.tickIcon}
          />
          <TextComponent styles={styles.tickText} text={'Agree to our '} />
        </Touchable>
        <TextComponent
          styles={styles.termsText}
          text={'terms & conditions.'}
          onPress={() => Linking.openURL('https://www.greenboom.com/privacy')}
        />
      </View>

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
    </KeyBoardWrapper>
  );
};
export default memo(RegisterScreen);
