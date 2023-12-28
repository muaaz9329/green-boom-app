import React, {memo, useCallback} from 'react';
import {View, Text, Image} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useEditProfileScreen from './useEditProfileScreen';

import {HeaderComponentProfile} from '../../Components/HeaderComponentProfile';
import {
  company,
  emailIcon,
  logout,
  passDots,
  passIcon,
  profileCompany,
  profileEmail,
  ProfileImage,
  username,
} from '../../Assets';
import BlurImage from '../../Components/BlurImage';
import {imageUrl} from '../../Utils/Urls';
import ThemeButtonWithIcon from '../../Components/ThemeButtonWithIcon';
import {Touchable} from '../../Components/Touchable';
import {InputComponent} from '../../Components/InputComponent';
import ThemeButton from '../../Components/ThemeButton';

const EditProfileScreen = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues} =
    useEditProfileScreen(navigation);

  return (
    <>
      <HeaderComponentProfile
        title={'Edit Profile'}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.catMain}>
        <BlurImage
          blurhash={'LKK1wP_3yYIU4.jsWrt7_NRjMdt7'}
          radius={75}
          isURI={true}
          styles={styles.ProfileImage}
          blurStyle={styles.blurMain}
          uri={imageUrl(ProfileImage)}
        />
        <TextComponent text={'John Doe'} styles={styles.name} />
        <TextComponent text={'greenboomcorp@mail.com'} styles={styles.email} />

        <TextComponent text={'User Name'} styles={styles.subHd} />
        <InputComponent
          {...{
            name: 'name',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            isImage: username,
            placeholder: 'John Doe',
            defaultValue: 'John Doe',
            viewStyle: {...styles.inputStyle},
          }}
        />
        <TextComponent text={'Company'} styles={styles.subHd} />
        <InputComponent
          {...{
            name: 'company',
            handleSubmit,
            errors,
            reset,
            control,
            isImage: company,
            getValues,
            placeholder: 'Green Boom Corp',
            defaultValue: 'Green Boom Corp',
            viewStyle: {...styles.inputStyle},
          }}
        />
        <TextComponent text={'Email Address'} styles={styles.subHd} />
        <InputComponent
          {...{
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            isImage: emailIcon,
            getValues,
            placeholder: 'greenboomcorp@mail.com',
            defaultValue: 'greenboomcorp@mail.com',
            viewStyle: {...styles.inputStyle},
          }}
        />
        <TextComponent text={'Password'} styles={styles.subHd} />
        <Touchable
          Opacity={1}
          onPress={() => navigation.navigate('ChangePasswordScreen')}
          style={styles.cardBtn}>
          <Image source={passDots} style={styles.passStyle} />
          <TextComponent text={'Change'} styles={styles.passTextStyle} />
        </Touchable>
        <View style={styles.logoutBtn}>
          <ThemeButtonWithIcon
            textStyle={styles.btnText}
            title={'Log out'}
            image={logout}
            style={styles.btn}
            imageStyle={styles.imgStyle}
          />
        </View>
        <ThemeButton title={'Change Password'} style={styles.buttonStyle} />
      </View>
    </>
  );
};
export default memo(EditProfileScreen);
