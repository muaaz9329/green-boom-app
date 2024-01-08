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
import {Touchable} from '../../Components/Touchable';
import {productData} from '../../Utils/localDB';
import {imageUrl} from '../../Utils/Urls';

const ProductScreen = ({route, navigation}) => {
  const {title, productList} = useProductScreen(navigation, route);
  console.log('firstaa', productList);
  const renderMSDSItem = useCallback(({item, index}) => {
    console.log('firstcd', imageUrl(item?.file));
    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback
          style={styles.cardBtn}
          onPress={() => navigation.navigate('ProductDetailScreen')}>
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
        search={true}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.videoMain}>
          <FlatList
            refreshing={false}
            data={productList?.all_products}
            numColumns={2}
            renderItem={renderMSDSItem}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default memo(ProductScreen);
