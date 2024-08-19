import React, {memo, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useProductScreen from './useProductScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {imageUrl} from '../../Utils/Urls';
import DataNotFound from '../../Components/DataNotFound';
import {ProductSkeletonScreen} from '../SkeletonScreen';
import {hp} from '../../Config/responsive';

const ProductScreen = ({route, navigation}) => {
  const {title, productList, isLoading} = useProductScreen(navigation, route);
  // console.log('firstaa', productList?.all_products?.length);
  const renderMSDSItem = ({item, index}) => {
    // console.log('firstcd', imageUrl(item?.file));

    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback
          style={styles.cardBtn}
          onPress={() => navigation.navigate('ProductDetailScreen', item)}>
          <View style={styles.imageStyle}>
            <Image source={{uri: item?.images[0]}} style={styles.iconStyle} />
            <TextComponent text={item?.title} styles={styles.titleStyle} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

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
      {isLoading && productList.length == 0 && (
        <View style={{marginTop: hp('1')}}>
          <FlatList
            refreshing={false}
            data={[1, 2, 3, 4]}
            renderItem={renderSkeleton}
            contentContainerStyle={
              {
                // alignItems: 'center',
              }
            }
          />
        </View>
      )}
      {!isLoading && productList.length > 0 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.videoMain}>
            <FlatList
              refreshing={false}
              data={productList}
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
      )}

      {!isLoading && productList.length < 1 && <DataNotFound />}
    </View>
  );
};
export default ProductScreen;

// {productList?.all_products ? (
//   productList?.all_products && productList?.all_products?.length > 0 ? (

//   ) : (
//     <DataNotFound />
//   )
// ) : (
//
// )}
