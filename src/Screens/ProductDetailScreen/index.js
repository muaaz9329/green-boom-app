import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

import useProductDetailScreen from './useProductDetailScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import HorizontalCarousal from '../../Components/HorizontalCarousal';
import {
  productBottom,
  productsData,
  remedidationOption,
  sizes,
  slider,
} from '../../Utils/localDB';
import {SizeDetails} from './SizeDetails';
import SelectDropdown from 'react-native-select-dropdown';
import {arrDown} from '../../Assets';

const ProductDetailScreen = ({navigation}) => {
  const {} = useProductDetailScreen(navigation);

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.lastSection}>
        <Image source={item?.icon} style={styles.lastIcon} />
        <TextComponent text={item?.name} styles={styles.lastName} />
      </View>
    );
  });

  return (
    <>
      <HeaderComponent
        title={'Product Details'}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        style={styles.productMain}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HorizontalCarousal data={slider} />
        <View style={styles.title}>
          <TextComponent
            text={productsData[0]?.name}
            numberOfLines={1}
            styles={styles.titleInner}
          />
          <TextComponent
            text={'SKU: ' + productsData[0]?.sku}
            styles={styles.sku}
            numberOfLines={2}
          />
        </View>
        <TextComponent
          text={productsData[0]?.usage}
          styles={styles.usage}
          numberOfLines={1}
        />
        <TextComponent text={productsData[0]?.title} styles={styles.pTitle} />
        <TextComponent
          text={productsData[0]?.description}
          styles={styles.pDesc}
        />
        <TextComponent
          text={'Select Size'}
          styles={{...styles.pTitle, ...styles.dropTitle}}
        />
        <View>
          <SelectDropdown
            buttonStyle={styles.selectIcon}
            buttonTextStyle={styles.selectText}
            rowTextStyle={styles.selected}
            renderDropdownIcon={() => (
              <Image source={arrDown} style={styles.arrowStyle} />
            )}
            defaultValueByIndex={0}
            drop
            dropdownIconPosition="right"
            data={sizes}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <TextComponent text={'Description'} styles={styles.pTitle} />
        <TextComponent
          text={productsData[0]?.longDescription}
          styles={{...styles.pDesc, ...styles.pDescLast}}
        />
        <SizeDetails sizeName={'SIZE'} sizeValue={productsData[0]?.sizeValue} />
        <SizeDetails
          sizeName={'DIMENSIONS'}
          sizeValue={productsData[0]?.dimensionValue}
        />
        <SizeDetails
          sizeName={'ABSORBENCY/BAG'}
          sizeValue={productsData[0]?.absorbencyValue}
        />
        <SizeDetails
          sizeName={'QTY/CASE'}
          sizeValue={productsData[0]?.qtyValue}
        />
        <View style={styles.remed}>
          <TextComponent
            text={'ADDED REMEDIATION MATERIAL'}
            styles={styles.size}
          />
          <SelectDropdown
            buttonStyle={styles.remedSelectIcon}
            buttonTextStyle={styles.selectText}
            rowTextStyle={styles.selected}
            renderDropdownIcon={() => (
              <Image source={arrDown} style={styles.arrowStyle} />
            )}
            defaultValueByIndex={0}
            drop
            dropdownIconPosition="right"
            data={remedidationOption}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <SizeDetails
          sizeName={'PRODUCT DIMENSIONS (LHW)'}
          sizeValue={productsData[0]?.productDimensionSize}
        />
        <SizeDetails
          sizeName={'PRODUCT DIMENSIONS (LHW)'}
          sizeValue={productsData[0]?.productDimensionCm}
        />
        <SizeDetails
          sizeName={'PACKAGING DIMENSIONS (LHW)'}
          sizeValue={productsData[0]?.packageDimensionSize}
        />
        <SizeDetails
          sizeName={'PACKAGING DIMENSIONS (LHW)'}
          sizeValue={productsData[0]?.packageDimensionCm}
        />
        <SizeDetails
          sizeName={'WEIGHT/PRODUCT'}
          sizeValue={productsData[0]?.weightProduct}
        />
        <SizeDetails
          sizeName={'TOTAL WEIGHT/PRODUCT'}
          sizeValue={productsData[0]?.totalWeightProduct}
        />
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
    </>
  );
};
export default memo(ProductDetailScreen);
