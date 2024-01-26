import React, {memo, useCallback} from 'react';
import {View, Text, Image} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useMyProfileScreen from './useMyProfileScreen';

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
} from '../../Assets';
import BlurImage from '../../Components/BlurImage';
import {imageUrl} from '../../Utils/Urls';
import ThemeButton from '../../Components/ThemeButton';
import ThemeButtonWithIcon from '../../Components/ThemeButtonWithIcon';
import {AlertDesign} from '../../Components/AlertDesign';
import {Touchable} from '../../Components/Touchable';
import {hp, wp} from '../../Config/responsive';

const MyProfileScreen = ({navigation}) => {
  const {onCancel, onConfirm, alert, userData} = useMyProfileScreen(navigation);

  return (
    <View style={styles.catMain}>
      <HeaderComponentProfile
        title={'My Profile'}
        search={true}
        // goBack={() => navigation.goBack()}
        edit={() => navigation.navigate('EditProfileScreen')}
      />
      <BlurImage
        blurhash={'LKK1wP_3yYIU4.jsWrt7_NRjMdt7'}
        radius={75}
        isURI={true}
        styles={styles.ProfileImage}
        blurStyle={styles.blurMain}
        uri={imageUrl(userData?.profile_image)}
      />
      <View style={styles.names}>
        <TextComponent text={userData?.name + ' '} styles={styles.name} />
        <TextComponent text={userData?.last_name} styles={styles.name} />
      </View>
      <TextComponent text={userData?.email} styles={styles.email} />
      <View style={styles.cardBtn}>
        <Image source={profileEmail} style={styles.iconStyle} />
        <TextComponent text={userData?.email} styles={styles.titleStyle} />
      </View>
      <View style={styles.cardBtn}>
        <Image source={profileCompany} style={styles.iconStyle} />
        <TextComponent
          text={
            userData?.company_name ? userData?.company_name : 'Company Name'
          }
          styles={styles.titleStyle}
        />
      </View>
      <View style={styles.cardBtn}>
        <Image source={passIcon} style={styles.iconStyle} />
        <Image source={passDots} style={styles.passStyle} />
      </View>
      <View style={styles.logoutBtn}>
        <ThemeButtonWithIcon
          onPress={() => onCancel()}
          textStyle={styles.btnText}
          title={'Log out'}
          image={logout}
          style={styles.btn}
          imageStyle={styles.imgStyle}
        />
      </View>
      <AlertDesign
        isVisible={alert}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title={'Log Out?'}
        message={'Are you sure, you want to log out?'}
        confirmText={'Yes, I want to'}
      />
    </View>
  );
};
export default memo(MyProfileScreen);
