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
import DataNotFound from '../../Components/DataNotFound';

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
    <View style={{flex: 1}}>
      <HeaderComponent
        title={'Catalogs & Brochures'}
        goBack={() => navigation.goBack()}
      />
      {category?.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.catMain}>
            <FlatList
              refreshing={false}
              data={category}
              renderItem={renderItem}
              contentContainerStyle={{
                // alignItems: 'center',
                marginTop: hp('2'),
                paddingBottom: hp('10'),
              }}
            />
          </View>
        </ScrollView>
      ) : (
        <DataNotFound />
      )}
    </View>
  );
};
export default memo(CatalogScreen);
