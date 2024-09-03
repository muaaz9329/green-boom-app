import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useDeleteAccount from './useDeleteAccount';
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

const DeleteAccount = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues, deleteAccount} =
    useDeleteAccount(navigation);

  return (
    <KeyBoardWrapper
      bounces={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <HeaderComponent
        goBack={() => navigation.goBack()}
        title={'Delete Account'}
      />
      <View style={styles.passMain}>
        <Image source={changePasswordIcon} style={styles.contactIcon} />
        <TextComponent text={'Delete Account'} styles={styles.Cpass} />
        <TextComponent
          text={'Please enter your password to delete your account'}
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
            placeholder: 'Enter Your Password',
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            isImage: passwordIcon,
            inputIconStyle: styles.lockstyle,
            viewStyle: styles.inputStyle,
          }}
        />

        <ThemeButton
          onPress={() => {
            console.log('delete account');
            // deleteAccount(getValues())
            console.log(getValues());
            deleteAccount(getValues());
          }}
          title={'Delete Account'}
          style={styles.buttonStyle}
        />
      </View>
    </KeyBoardWrapper>
  );
};
export default DeleteAccount;
