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
  console.log(profileData);
  return (
    <KeyBoardWrapper>
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
            uri={profileData}
          />
          <Touchable
            onPress={uploadFromGalary}
            style={styles.profileIcon}
            Opacity={0.8}>
            <Image source={editPro} style={styles.addImageIcon} />
          </Touchable>
        </View>
        <View style={styles.names}>
          <TextComponent text={userData?.name + ' '} styles={styles.name} />
          <TextComponent text={userData?.last_name} styles={styles.name} />
        </View>
        <TextComponent text={userData?.email} styles={styles.email} />
        <ScrollView styles={{flex: 1}}>
          {/* <TextComponent text={'First Name'} styles={styles.subHd} /> */}
          <InputComponent
            {...{
              name: 'name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              isImage: username,
              placeholder: 'First Name',
              defaultValue: userData?.name?.split(' ')[0],
              viewStyle: {...styles.nameSt},
            }}
          />
          {/* <TextComponent text={'Last Name'} styles={styles.subHd} /> */}
          <InputComponent
            {...{
              name: 'last_name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              isImage: username,
              placeholder: 'last Name',
              defaultValue: userData?.name?.split(' ')[1],
              viewStyle: {...styles.nameSt},
            }}
          />
          {/* <TextComponent text={'Company'} styles={styles.subHd} /> */}
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
              defaultValue: userData?.companyType,
              viewStyle: {...styles.inputStyle},
            }}
          />
          {/* <TextComponent text={'Email Address'} styles={styles.subHd} /> */}
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
              editable: false,
            }}
          />
          {/* <TextComponent text={'Password'} styles={styles.subHd} /> */}
          <Touchable
            Opacity={1}
            onPress={() => navigation.navigate('ChangePasswordScreen')}
            style={styles.cardBtn}>
            <Image source={passDots} style={styles.passStyle} />
            <TextComponent text={'Change'} styles={styles.passTextStyle} />
          </Touchable>
        </ScrollView>
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
    </KeyBoardWrapper>
  );
};
export default EditProfileScreen;
