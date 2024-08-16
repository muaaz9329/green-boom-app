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
        data={productData?.sizePicker.map(res => res?.title)}
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
          <View style={styles.title}>
            <TextComponent
              text={productData?.product_data?.product_name}
              // numberOfLines={1}
              styles={styles.titleInner}
            />
            <TextComponent
              text={`SKU: ${remOption ? title?.sku_rem : size?.sku_num}`}
              styles={styles.sku}
              numberOfLines={2}
            />
          </View>

          <TextComponent
            text={remOption ? remTitle : productData?.product_data?.title}
            styles={styles.pTitle}
          />
          <TextComponent
            text={productData?.product_data?.description}
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
            {desc && (
              <TextComponent text={'Description'} styles={styles.pTitle} />
            )}
            {desc &&
              descArry?.map(res => {
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
          {size &&
            Object.entries(size).map(([key, value]) => {
              // console.log('sz', size);
              return (
                !notRequired.includes(key) &&
                value !== 'undefined' &&
                value !== null && (
                  <SizeDetails
                    sizeName={key.replace(/_/g, ' / ')}
                    sizeValue={value}
                  />
                )
              );
            })}

          {size?.added_remediation_material &&
            title?.sku_rem != 'undefined' && (
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
                    setRemOption(selectedItem == 'Yes' ? true : false);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>
            )}
          {dimension &&
            Object.entries(dimension).map(([key, value]) => {
              // console.log('asdd', dimension);
              return (
                !notReqDimension.includes(key) &&
                value !== 'undefined' &&
                value !== null && (
                  <SizeDetails
                    sizeName={key.replace(/_/g, ' / ').replace(/\d/g, '')}
                    sizeValue={value}
                  />
                )
              );
            })}

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
