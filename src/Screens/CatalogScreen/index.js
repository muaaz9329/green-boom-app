import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList, Linking} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useCatalogScreen from './useCatalogScreen';
import {catData} from '../../Utils/localDB';
import {downloadIcon} from '../../Assets';
import {hp} from '../../Config/responsive';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {imageUrl} from '../../Utils/Urls';

const CatalogScreen = ({navigation}) => {
  const {category, iconType} = useCatalogScreen(navigation);
  const renderItem = useCallback(({item, index}) => {
    return (
      <Touchable
        style={styles.cardBtn}
        onPress={() => Linking.openURL(imageUrl(item?.file))}>
        <Image source={iconType[item?.file_type]} style={styles.iconStyle} />
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
      <HeaderComponent
        title={'Catalogs & Brochures'}
        goBack={() => navigation.goBack()}
      />
      <View style={styles.catMain}>
        <FlatList
          refreshing={false}
          data={category}
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
