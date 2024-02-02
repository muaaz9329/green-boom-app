import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, Dimensions, StyleSheet, Image} from 'react-native';
import * as Screens from '../Screens/index';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import Orientation from 'react-native-orientation-locker';
import {
  home2,
  profile1,
  notification1,
  setting1,
  home1,
  profile2,
  notification2,
  setting2,
} from '../Assets';
import {types} from '../Redux/types';
import useReduxStore from '../Hooks/UseReduxStore';
globalStyles = {};
const isIOS = Boolean(Platform.OS == 'ios');
const tabarComponent = (activeImage, unActiveImage, ImageStyle) => {
  return {
    tabBarIcon: ({focused}) => (
      <View style={styles.tabarView}>
        <Image
          style={{...styles.imgstyle, ...ImageStyle}}
          source={focused ? activeImage : unActiveImage}
        />
      </View>
    ),
    title: '',
    tabBarLabelStyle: styles.tabarTitle,
  };
};

const Tab = createBottomTabNavigator();

function MybottomTabs() {
  const {getState, dispatch} = useReduxStore();

  const {isVideo} = getState('isVideo');

  const [isPortrait, setIsPortrait] = useState(true);
  useEffect(() => {
    const handleOrientationChange = orientation => {
      setIsPortrait(orientation === 'PORTRAIT');
    };

    // Set initial orientation
    handleOrientationChange(Orientation.getInitialOrientation());

    // Add listener for orientation change
    Orientation.addOrientationListener(handleOrientationChange);

    // Clean up on component unmount
    return () => {
      Orientation.removeOrientationListener(handleOrientationChange);
    };
  }, []);
  // console.log({isPortrait});

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: 'transparent',
        headerShown: false,
        // tabBarActiveBackgroundColor: 'black',
        // tabBarInactiveBackgroundColor: 'black',
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarAllowFontScaling: true,
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarStyle: {
          height: hp('8'),
          width: wp('92'),
          marginBottom: hp('1.5'),
          alignSelf: 'center',
          backgroundColor: Colors.black,
          backfaceVisibility: 'hidden',
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          // borderTopRightRadius: 20,
          // borderTopLeftRadius: 20,
          borderRadius: 10,
          // zIndex: -1,
          // overflow: 'hidden',
          display: !isPortrait ? 'none' : 'flex',
          paddingBottom: Platform.OS == 'ios' ? hp('3') : 0,
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={tabarComponent(home2, home1)}
        component={Screens.HomeScreen}
        listeners={{
          blur: () => dispatch({type: types.isVideo, payload: !isVideo}),
        }}
      />
      <Tab.Screen
        name="MyProfileScreen"
        options={tabarComponent(profile2, profile1)}
        component={Screens.MyProfileScreen}
      />

      {/* <Tab.Screen
        name="ChatScreen"
        options={tabarComponent(notification2, notification1)}
        component={Screens.HomeScreen}
      /> */}
      <Tab.Screen
        name="SettingScreen"
        options={tabarComponent(setting2, setting1)}
        component={Screens.SettingScreen}
      />
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor: Colors.badgeColor,
  },
  tabarTitle: {
    display: 'none',
  },
  tabarView: (focused, last) => ({
    width: 'auto',
    backgroundColor: 'transparent',
    // bottom: hp('0.5'),
  }),

  imgstyle: {
    resizeMode: 'contain',
    width: wp('7'),
    height: hp('4'),
    top: Platform.OS == 'ios' ? hp('1.5') : 0,
  },
});
