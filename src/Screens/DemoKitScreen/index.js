import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useDemoKitScreen from './useDemoKitScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowrightblack} from '../../Assets';
import {imageUrl} from '../../Utils/Urls';
import DataNotFound from '../../Components/DataNotFound';

const DemoKitScreen = ({route, navigation}) => {
  const {title, kitData} = useDemoKitScreen(navigation, route);

  const renderMSDSItem = useCallback(({item, index}) => {
    // console.log('img',imageUrl(item?.image))
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => navigation.navigate('DemoKitSingleScreen', item)}>
          <Image
            source={{uri: imageUrl(item?.image)}}
            style={styles.iconStyle}
          />
          <View style={styles.imageStyle}>
            <TextComponent text={item?.title} styles={styles.titleStyle} />
            <TextComponent
              text={item?.short_description}
              styles={styles.descStyle}
            />
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
      {kitData.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.main}>
          <View style={styles.proMain}>
            <FlatList
              refreshing={false}
              data={kitData}
              renderItem={renderMSDSItem}
              contentContainerStyle={
                {
                  // alignItems: 'center',
                }
              }
            />
          </View>
        </ScrollView>
      ) : (
        <DataNotFound />
      )}
    </View>
  );
};
export default memo(DemoKitScreen);
