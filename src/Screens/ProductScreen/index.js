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

const ProductScreen = ({route, navigation}) => {
  const {title} = useProductScreen(navigation, route);

  const renderMSDSItem = useCallback(({item, index}) => {
    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback style={styles.cardBtn}>
          <View style={styles.imageStyle}>
            <Image source={item?.image} style={styles.iconStyle} />
            <TextComponent text={item?.title} styles={styles.titleStyle} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent title={title} search={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.videoMain}>
          <FlatList
            refreshing={false}
            data={productData}
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
