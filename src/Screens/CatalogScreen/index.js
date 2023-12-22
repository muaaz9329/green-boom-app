import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useCatalogScreen from './useCatalogScreen';
import {catData} from '../../Utils/localDB';
import {downloadIcon} from '../../Assets';
import {hp} from '../../Config/responsive';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';

const CatalogScreen = ({navigation}) => {
  const {} = useCatalogScreen(navigation);
  const renderItem = useCallback(({item, index}) => {
    return (
      <Touchable style={styles.cardBtn}>
        <Image source={item?.image} style={styles.iconStyle} />
        <TextComponent text={item?.title} styles={styles.titleStyle} />
        <Image
          source={downloadIcon}
          style={styles.arrowRight}
          resizeMode="contain"
        />
      </Touchable>
    );
  });
  return (
    <ScrollView>
      <HeaderComponent title={'Catalogs & Brochures'} />
      <View style={styles.catMain}>
        <FlatList
          refreshing={false}
          data={catData}
          renderItem={renderItem}
          contentContainerStyle={{
            // alignItems: 'center',
            marginTop: hp('2'),
          }}
        />
      </View>
    </ScrollView>
  );
};
export default memo(CatalogScreen);
