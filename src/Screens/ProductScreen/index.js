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

const ProductScreen = ({route, navigation}) => {
  const {title, productList} = useProductScreen(navigation, route);
  // console.log('firstaa', productList?.all_products?.length);
  const renderMSDSItem = useCallback(({item, index}) => {
    // console.log('firstcd', imageUrl(item?.file));
    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback
          style={styles.cardBtn}
          onPress={() => navigation.navigate('ProductDetailScreen', item?.id)}>
          <View style={styles.imageStyle}>
            <Image
              source={{uri: imageUrl(item?.file)}}
              style={styles.iconStyle}
            />
            <TextComponent
              text={item?.product_name}
              styles={styles.titleStyle}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={title}
        // search={true}
        goBack={() => navigation.goBack()}
      />
      {productList?.all_products?.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.videoMain}>
            <FlatList
              refreshing={false}
              data={productList?.all_products}
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
        <DataNotFound />
      )}
    </View>
  );
};
export default memo(ProductScreen);
