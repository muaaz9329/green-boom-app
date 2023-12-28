import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useDemoKitScreen from './useDemoKitScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {demoKit} from '../../Utils/localDB';
import {arrowrightblack} from '../../Assets';

const DemoKitScreen = ({route, navigation}) => {
  const {title} = useDemoKitScreen(navigation, route);

  const renderMSDSItem = useCallback(({item, index}) => {
    return (
      <View style={styles.card}>
        <Touchable style={styles.cardBtn}>
          <Image source={item?.image} style={styles.iconStyle} />
          <View style={styles.imageStyle}>
            <TextComponent text={item?.title} styles={styles.titleStyle} />
            <TextComponent text={item?.description} styles={styles.descStyle} />
          </View>
          <Image
            source={arrowrightblack}
            style={styles.arrowRight}
            resizeMode="contain"
          />
        </Touchable>
      </View>
    );
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent title={title} goBack={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.proMain}>
          <FlatList
            refreshing={false}
            data={demoKit}
            renderItem={renderMSDSItem}
            contentContainerStyle={
              {
                // alignItems: 'center',
              }
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default memo(DemoKitScreen);
