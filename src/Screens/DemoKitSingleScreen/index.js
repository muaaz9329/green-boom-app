import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useDemoKitSingleScreen from './useDemoKitSingleScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {demoKit, kitList} from '../../Utils/localDB';
import {arrowrightblack, demokit, videoCircle} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import ThemeButton from '../../Components/ThemeButton';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import {imageUrl, kitForm} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import {hp} from '../../Config/responsive';

const DemoKitSingleScreen = ({route, navigation}) => {
  const {handleSubmit, errors, reset, control, getValues, submitData} =
    useDemoKitSingleScreen(navigation, route);
  const kitInnerData = route.params;

  const sentencesArray =
    kitInnerData?.kit_includes && JSON.parse(kitInnerData?.kit_includes);
  const descArry = kitInnerData?.kit_includes && JSON.parse([sentencesArray]);

  // const onSubmit = data => {
  //   submitData(data); // Call the function from the separate file
  //   console.log('asd', data);
  // };

  const onSubmit = async data => {
    console.log('dtaaa', data);
    try {
      // Perform the API call to post data
      const response = await API.post(kitForm, data);

      if (response.ok) {
        // Handle success
        console.log('Data posted successfully:', response.data);
        reset();
        navigation.navigate('ThankYouScreen');
      } else {
        // Handle error
        console.error('Error posting data:', response.problem);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={kitInnerData?.title}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp('20')}}>
        <View style={styles.cardBtn}>
          <Image
            source={{uri: imageUrl(kitInnerData?.image)}}
            style={styles.iconStyle}
          />
          <View style={styles.imageStyle}>
            <View style={styles.titleArea}>
              <TextComponent
                text={kitInnerData?.title}
                styles={styles.titleStyle}
              />
              <Touchable
                style={styles.videoIcoMain}
                onPress={() =>
                  navigation.navigate('DemoKitVideoScreen', kitInnerData)
                }>
                <Image source={videoCircle} style={styles.videoIcon} />
                <TextComponent
                  text={'Watch Video'}
                  styles={styles.videoTitle}
                />
              </Touchable>
            </View>
            <TextComponent
              text={kitInnerData?.description}
              styles={styles.descStyle}
            />
          </View>
        </View>
        <View style={styles.kitInner}>
          <TextComponent
            text={'The kit includes:'}
            styles={styles.kitInclude}
          />
          {descArry &&
            descArry.map(res => {
              console.log('res', res);
              return (
                <View style={styles.subDes}>
                  <View style={styles.dotSt}></View>
                  <TextComponent
                    text={res}
                    styles={{...styles.pDesc, ...styles.pDescLast}}
                  />
                </View>
              );
            })}
        </View>
        <View style={styles.form}>
          <KeyBoardWrapper showsVerticalScrollIndicator={false}>
            <View style={styles.inputCol}>
              <View>
                <InputComponent
                  {...{
                    name: 'first_name',
                    handleSubmit,
                    errors,
                    reset,
                    control,
                    getValues,
                    placeholder: 'First name',
                    defaultValue: '',
                    viewStyle: styles.inputLeft,
                  }}
                />
              </View>
              <View>
                <InputComponent
                  {...{
                    name: 'last_name',
                    handleSubmit,
                    errors,
                    reset,
                    control,
                    getValues,
                    placeholder: 'Last name',
                    defaultValue: '',
                    viewStyle: styles.inputRight,
                  }}
                />
              </View>
            </View>
            <View style={styles.inputCol}>
              <View>
                <InputComponent
                  {...{
                    name: 'email',
                    handleSubmit,
                    errors,
                    reset,
                    control,
                    getValues,
                    placeholder: 'Email',
                    defaultValue: '',
                    viewStyle: styles.inputLeft,
                  }}
                />
              </View>
              <View>
                <InputComponent
                  {...{
                    name: 'phone',
                    handleSubmit,
                    errors,
                    reset,
                    control,
                    getValues,
                    placeholder: 'Phone',
                    defaultValue: '',
                    viewStyle: styles.inputRight,
                  }}
                />
              </View>
            </View>
            <View style={styles.inputCol}>
              <View>
                <InputComponent
                  {...{
                    name: 'company',
                    handleSubmit,
                    errors,
                    reset,
                    control,
                    getValues,
                    placeholder: 'Company',
                    defaultValue: '',
                    viewStyle: styles.inputLeft,
                  }}
                />
              </View>
              <View>
                <InputComponent
                  {...{
                    name: 'country',
                    handleSubmit,
                    errors,
                    reset,
                    control,
                    getValues,
                    placeholder: 'Country',
                    defaultValue: '',
                    viewStyle: styles.inputRight,
                  }}
                />
              </View>
            </View>
            <View style={styles.inputCol}>
              <View>
                <InputComponent
                  {...{
                    name: 'state',
                    handleSubmit,
                    errors,
                    reset,
                    control,
                    getValues,
                    placeholder: 'State',
                    defaultValue: '',
                    viewStyle: styles.inputLeft,
                  }}
                />
              </View>
              <View>
                <InputComponent
                  {...{
                    name: 'zip_code',
                    handleSubmit,
                    errors,
                    reset,
                    control,
                    getValues,
                    placeholder: 'Zip Code',
                    defaultValue: '',
                    viewStyle: styles.inputRight,
                  }}
                />
              </View>
            </View>
            <View>
              <InputComponent
                {...{
                  name: 'address',
                  handleSubmit,
                  errors,
                  reset,
                  control,
                  getValues,
                  placeholder: 'Address',
                  defaultValue: '',
                  viewStyle: styles.address,
                }}
              />
            </View>
            <ThemeButton
              // onPress={handleSubmit(onSubmit)}
              onPress={handleSubmit(onSubmit)}
              title={'Order a Kit'}
              style={styles.kitBtn}
            />
          </KeyBoardWrapper>
        </View>
      </ScrollView>
    </View>
  );
};
export default memo(DemoKitSingleScreen);
