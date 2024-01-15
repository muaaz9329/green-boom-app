import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useEditProfileScreen from './useEditProfileScreen';

import {HeaderComponentProfile} from '../../Components/HeaderComponentProfile';
import {
  company,
  editPro,
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
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';

const EditProfileScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    userData,
    updateProfileFunction,
    uploadFromGalary,
    profileData,
  } = useEditProfileScreen(navigation);

  return (
    <>
      <HeaderComponentProfile
        title={'Edit Profile'}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.catMain}>
        <View>
          <BlurImage
            blurhash={'LKK1wP_3yYIU4.jsWrt7_NRjMdt7'}
            radius={75}
            isURI={true}
            styles={styles.ProfileImage}
            blurStyle={styles.blurMain}
            uri={profileData?.uri ?? imageUrl(userData?.profile_image)}
          />
          <Touchable
            onPress={uploadFromGalary}
            style={styles.profileIcon}
            Opacity={0.8}>
            <Image source={editPro} style={styles.addImageIcon} />
          </Touchable>
        </View>
        <TextComponent text={userData?.name} styles={styles.name} />
        <TextComponent text={userData?.email} styles={styles.email} />
        <KeyBoardWrapper>
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
              defaultValue: userData?.name,
              viewStyle: {...styles.nameSt},
            }}
          />
          <TextComponent text={'Company'} styles={styles.subHd} />
          <InputComponent
            {...{
              name: 'company_name',
              handleSubmit,
              errors,
              reset,
              control,
              isImage: company,
              getValues,
              placeholder: 'Green Boom Corp',
              defaultValue: userData?.company_name,
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
              defaultValue: userData?.email,
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
        </KeyBoardWrapper>
        {/* <View style={styles.logoutBtn}>
          <ThemeButtonWithIcon
            textStyle={styles.btnText}
            title={'Log out'}
            image={logout}
            style={styles.btn}
            imageStyle={styles.imgStyle}
          />
        </View> */}
        <ThemeButton
          onPress={handleSubmit(updateProfileFunction)}
          title={'Save'}
          style={styles.buttonStyle}
        />
      </View>
    </>
  );
};
export default memo(EditProfileScreen);
