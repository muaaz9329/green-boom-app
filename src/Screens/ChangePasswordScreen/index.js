import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useChangePasswordScreen from './useChangePasswordScreen';
import {catData, contactData} from '../../Utils/localDB';
import {
  changePasswordIcon,
  contacticon,
  downloadIcon,
  passwordIcon,
  lock,
} from '../../Assets';
import {hp} from '../../Config/responsive';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {InputComponent} from '../../Components/InputComponent';
import ThemeButton from '../../Components/ThemeButton';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';

const ChangePasswordScreen = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues, changePassword} =
    useChangePasswordScreen(navigation);

  return (
    <KeyBoardWrapper
      bounces={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <HeaderComponent
        goBack={() => navigation.goBack()}
        title={'Change Password'}
      />
      <View style={styles.passMain}>
        <Image source={changePasswordIcon} style={styles.contactIcon} />
        <TextComponent text={'Change Password'} styles={styles.Cpass} />
        <TextComponent
          text={'Please enter your password'}
          styles={styles.CpassSub}
        />
        <InputComponent
          {...{
            name: 'password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Old Password',
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            isImage: passwordIcon,
            inputIconStyle: styles.lockstyle,
            viewStyle: styles.inputStyle,
          }}
        />
        <InputComponent
          {...{
            name: 'new_password',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'New Password',
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            isImage: passwordIcon,
            inputIconStyle: styles.lockstyle,
            viewStyle: styles.inputStyle,
          }}
        />
        <ThemeButton
          onPress={handleSubmit(changePassword)}
          title={'Change Password'}
          style={styles.buttonStyle}
        />
      </View>
    </KeyBoardWrapper>
  );
};
export default ChangePasswordScreen;
