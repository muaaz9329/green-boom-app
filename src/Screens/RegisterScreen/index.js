import React, {memo} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {email, lock, userIcon, phone, arrowBack} from '../../Assets';
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
  } = useRegister(navigation);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.logInMain}>
      <Touchable style={styles.backMain} onPress={goBack}>
        <TextComponent text={'Back'} styles={styles.backBtn} />
      </Touchable>

      <TextComponent text={'Register'} styles={styles.createAcc} />
      <InputComponent
        {...{
          name: 'name',
          handleSubmit,
          errors,
          reset,
          control,
          getValues,
          placeholder: 'Name',
          isImage: userIcon,
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
          placeholder: 'Email',
          isImage: email,
          defaultValue: '',
        }}
      />
      <InputComponent
        {...{
          name: 'number',
          handleSubmit,
          errors,
          reset,
          control,
          getValues,
          placeholder: 'Contact Number',
          isImage: phone,
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
          placeholder: 'Password',
          isImage: lock,
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
          placeholder: 'Password',
          isImage: lock,
          defaultValue: '',
          isSecure: true,
          inputIconStyle: styles.lockstyle,
        }}
      />
      <ThemeButton
        title={'Sign up'}
        onPress={handleSubmit(signUpButton)}
        btnStyle={styles.buttonStyle}
      />
      <Touchable onPress={loginNav}>
        <Text>Login</Text>
      </Touchable>
    </ScrollView>
  );
};
export default memo(RegisterScreen);
