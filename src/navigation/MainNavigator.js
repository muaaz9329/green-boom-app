import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useReduxStore from '../Hooks/UseReduxStore';
import NavigationService from '../Services/NavigationService';
import * as Screens from '../Screens/index';
import MybottomTabs from './bottomNavigation';
import Orientation from 'react-native-orientation-locker';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  const {getState} = useReduxStore();
  const {onboarding} = getState('onboarding');
  const {isLogin} = getState('Auth');

  return (
    <NavigationContainer
      ref={ref => {
        NavigationService.setRef(ref);
        // const p = NavigationService.getCurrentRoute(ref.getCurrentRoute());
      }}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}>
        {!onboarding && (
          <Stack.Screen
            name="OnBoardScreen"
            component={Screens.OnBoardScreen}
          />
        )}
        {!isLogin && (
          <>
            <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
            <Stack.Screen
              name="RegisterScreen"
              component={Screens.RegisterScreen}
            />
            <Stack.Screen
              name="ForgetPasswordScreen"
              component={Screens.ForgetPasswordScreen}
            />
          </>
        )}
        {isLogin && (
          <>
            {/* <Stack.Screen
              name="SkeletonScreen"
              component={Screens.SkeletonScreen}
            /> */}

            {/* <Stack.Screen
              name="SkeletonScreen"
              component={Screens.SkeletonScreen}
            /> */}
            <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
            <Stack.Screen
              name="TrainingScreen"
              component={Screens.TrainingScreen}
            />
            <Stack.Screen name="MSDScreen" component={Screens.MSDScreen} />
            <Stack.Screen
              name="SingleVideoScreen"
              component={Screens.SingleVideoScreen}
            />
            <Stack.Screen
              name="DemoKitScreen"
              component={Screens.DemoKitScreen}
            />
            <Stack.Screen
              name="DemoKitSingleScreen"
              component={Screens.DemoKitSingleScreen}
            />
            <Stack.Screen
              name="DemoKitVideoScreen"
              component={Screens.DemoKitVideoScreen}
            />
            <Stack.Screen
              name="ThankYouScreen"
              component={Screens.ThankYouScreen}
            />

            <Stack.Screen
              name="ProductScreen"
              component={Screens.ProductScreen}
            />
            <Stack.Screen
              name="CatalogScreen"
              component={Screens.CatalogScreen}
            />
            <Stack.Screen
              name="ContactScreen"
              component={Screens.ContactScreen}
            />
            <Stack.Screen
              name="ChangePasswordScreen"
              component={Screens.ChangePasswordScreen}
            />
            <Stack.Screen
              name="MyProfileScreen"
              component={Screens.MyProfileScreen}
            />
            <Stack.Screen
              name="EditProfileScreen"
              component={Screens.EditProfileScreen}
            />
            <Stack.Screen
              name="ProductDetailScreen"
              component={Screens.ProductDetailScreen}
            />
            <Stack.Screen
              name="FaqsHtmlScreen"
              component={Screens.FaqsHtmlScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
