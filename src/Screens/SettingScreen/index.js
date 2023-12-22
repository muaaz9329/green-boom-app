import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useSettingScreen from './useSettingScreen';
import {catData, settingData} from '../../Utils/localDB';
import {arrowrightsmall, downloadIcon} from '../../Assets';
import {hp} from '../../Config/responsive';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import Icon from 'react-native-vector-icons/Feather';

const SettingScreen = ({navigation}) => {
  const {} = useSettingScreen(navigation);
  const renderItem = useCallback(({item, index}) => {
    return (
      <Touchable style={styles.cardBtn}>
        <Image source={item?.image} style={styles.iconStyle} />
        <TextComponent text={item?.title} styles={styles.titleStyle} />
        <Icon name="chevron-right" size={25} style={styles.arrowRight} />
      </Touchable>
    );
  });
  return (
    <>
      <HeaderComponent title={'Catalogs & Brochures'} />
      <ScrollView>
        <View style={styles.catMain}>
          <FlatList
            refreshing={false}
            data={settingData}
            renderItem={renderItem}
            contentContainerStyle={{
              // alignItems: 'center',
              marginTop: hp('2'),
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default memo(SettingScreen);
