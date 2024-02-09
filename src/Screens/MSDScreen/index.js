import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList, Linking} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useMSDS from './useMSDScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {imageUrl} from '../../Utils/Urls';
import DataNotFound from '../../Components/DataNotFound';
import {ProductSkeletonScreen} from '../SkeletonScreen';
import {hp} from '../../Config/responsive';

const MSDScreen = ({route, navigation}) => {
  const {title, category, iconType, isloading} = useMSDS(navigation, route);

  const renderMSDSItem = useCallback(({item, index}) => {
    console.log('first', item);
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => Linking.openURL(imageUrl(item?.file))}>
          <View style={styles.imageStyle}>
            {/* <Image
              source={iconType[item?.file_type]}
              style={styles.iconStyle}
            /> */}
            <Image
              source={{uri: imageUrl(item?.image)}}
              style={styles.iconStyle}
            />
            <TextComponent
              text={item?.title}
              numberOfLines={2}
              styles={styles.titleStyle}
            />
          </View>
        </Touchable>
      </View>
    );
  });

  const renderSkeleton = useCallback(({item, index}) => {
    return <ProductSkeletonScreen />;
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={title}
        // search={true}
        goBack={() => navigation.goBack()}
      />
      {isloading && category.length == 0 ? (
        <View style={{marginTop: hp('1.2'), flex: 1}}>
          <FlatList
            refreshing={false}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={renderSkeleton}
            contentContainerStyle={{
              // alignItems: 'center',
              flex: 1,
            }}
          />
        </View>
      ) : category.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.videoMain}>
            <FlatList
              refreshing={false}
              data={category}
              numColumns={2}
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
        !isloading && category.length == 0 && <DataNotFound />
      )}
    </View>
  );
};
export default memo(MSDScreen);
