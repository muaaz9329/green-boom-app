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
import {imageUrl} from '../../Utils/Urls';

const DemoKitSingleScreen = ({route, navigation}) => {
  const {handleSubmit, errors, reset, control, getValues} =
    useDemoKitSingleScreen(navigation, route);
  const kitInnerData = route.params;

  const sentencesArray =
    kitInnerData?.kit_includes && JSON.parse(kitInnerData?.kit_includes);
  const descArry = kitInnerData?.kit_includes && JSON.parse([sentencesArray]);
  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={kitInnerData?.title}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
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
              <InputComponent
                {...{
                  name: 'name',
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

              <InputComponent
                {...{
                  name: 'last',
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
            <View style={styles.inputCol}>
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
            <View style={styles.inputCol}>
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
            <View style={styles.inputCol}>
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

              <InputComponent
                {...{
                  name: 'code',
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
            <View>
              <InputComponent
                {...{
                  name: 'name',
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
              onPress={handleSubmit()}
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
