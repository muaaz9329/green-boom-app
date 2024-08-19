import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

import useProductDetailScreen from './useProductDetailScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import HorizontalCarousal from '../../Components/HorizontalCarousal';
import {
  notReqDimension,
  notRequired,
  productBottom,
  productsData,
  remedidationOption,
  sizes,
  slider,
} from '../../Utils/localDB';
import {SizeDetails} from './SizeDetails';
import SelectDropdown from 'react-native-select-dropdown';
import {arrDown} from '../../Assets';
import {ProductInnerSkeletonScreen} from '../SkeletonScreen';

const ProductDetailScreen = ({route, navigation}) => {
  const {
    productData,
    selectedSize,
    setSelectedSize,
    remOption,
    setRemOption,
    isloading,
  } = useProductDetailScreen(navigation, route);

  const {title, size, dimension, desc, descArry} = {
    title: 'title',
    size: 'size',
    dimension: 'dimension',
    desc: ['desc1', 'desc2', 'desc3'],
    descArry: ['desc1', 'desc2', 'desc3'],
  };

  let text = title?.title_remediation;

  // Remove newline characters
  let remTitle = text?.replace(/\r?\n|\r/g, ' ');

  // console.log('sze', size);

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.lastSection}>
        <Image source={item?.icon} style={styles.lastIcon} />
        <TextComponent text={item?.name} styles={styles.lastName} />
      </View>
    );
  });

  const SizePickerView = useCallback(() => {
    return (
      <SelectDropdown
        buttonStyle={styles.selectIcon}
        buttonTextStyle={styles.selectText}
        rowTextStyle={styles.selected}
        renderDropdownIcon={() => (
          <Image source={arrDown} style={styles.arrowStyle} />
        )}
        defaultValueByIndex={selectedSize?.index}
        drop
        dropdownIconPosition="right"
        data={['Small', 'Medium', 'Large']}
        onSelect={(selectedItem, index) => {
          // console.log(
          //   'jksdbjklvsbdkjlvbskldbvlsdbvds',
          //   productData?.medium[0]?.desc,
          // );
          setSelectedSize({id: selectedItem, index});
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    );
  }, [productData]);

  return (
    <>
      <HeaderComponent
        title={'Product Details'}
        goBack={() => navigation.goBack()}
      />
      {isloading ? null : (
        <ScrollView
          contentContainerStyle={styles.productMain}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {/* <HorizontalCarousal data={productData?.image ?? []} isUri={true} /> */}
          <Image
            source={{uri: productData?.images[0]}}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
          <View style={styles.title}>
            <TextComponent
              text={productData?.title}
              // numberOfLines={1}
              styles={styles.titleInner}
            />
            <TextComponent
              text={`SKU: ${productData?.productcode}`}
              styles={styles.sku}
              numberOfLines={2}
            />
          </View>

          {/* <TextComponent
            text={remOption ? remTitle : productData?.product_data?.title}
            styles={styles.pTitle}
          /> */}
          <TextComponent
            text={productData?.description}
            styles={styles.pDesc}
          />
          <TextComponent
            text={'Select Size'}
            styles={{...styles.pTitle, ...styles.dropTitle}}
          />
          <View>
            <SizePickerView />
          </View>
          <View style={styles.destyles}>
            {productData?.description && (
              <TextComponent text={'Description'} styles={styles.pTitle} />
            )}
            {productData?.features &&
              productData?.features?.map(res => {
                // console.log('res', res);
                return (
                  <View style={styles.subDes}>
                    <View style={styles.dotSt}></View>
                    <TextComponent
                      text={res}
                      styles={{...styles.pDesc, ...styles.pDescLast}}
                    />
                  </View>
                );
              })}
          </View>

          <FlatList
            refreshing={false}
            data={productBottom}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          />
        </ScrollView>
      )}
    </>
  );
};
export default memo(ProductDetailScreen);
