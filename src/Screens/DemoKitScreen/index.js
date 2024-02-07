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
import {kitImages} from '../../Utils/localDB';
import {DemoSkeletonScreen} from '../SkeletonScreen';
import {hp} from '../../Config/responsive';

const DemoKitScreen = ({route, navigation}) => {
  const {title, kitData, isloading} = useDemoKitScreen(navigation, route);

  const renderMSDSItem = useCallback(({item, index}) => {
    console.log('img', item);
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => navigation.navigate('DemoKitSingleScreen', item)}>
          <Image
            source={kitImages[item?.id] ?? {uri: imageUrl(item?.image)}}
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

  const renderSkeleton = useCallback(({item, index}) => {
    return <DemoSkeletonScreen />;
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent title={title} goBack={() => navigation.goBack()} />
      {isloading && kitData.length == 0 ? (
        <View style={{marginTop: hp('1')}}>
          <FlatList
            refreshing={false}
            data={[1, 2]}
            renderItem={renderSkeleton}
            contentContainerStyle={
              {
                // alignItems: 'center',
              }
            }
          />
        </View>
      ) : kitData.length > 0 ? (
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
        !isloading && kitData.length == 0 && <DataNotFound />
      )}
    </View>
  );
};
export default memo(DemoKitScreen);
