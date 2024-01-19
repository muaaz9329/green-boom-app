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

const ProductDetailScreen = ({route, navigation}) => {
  const {productData, selectedSize, setSelectedSize, remOption, setRemOption} =
    useProductDetailScreen(navigation, route);
  // console.log('test', productData);

  const size = productData?.[selectedSize.id][0]?.size[0];
  const dimension = productData?.[selectedSize.id][0]?.dimension[0];
  const title = productData?.[selectedSize.id][0]?.title[0];
  const desc =
    productData?.[selectedSize.id][0]?.desc == undefined
      ? productData?.[productData?.sizePicker[0]?.id][0]?.desc[0]
          .sub_description
      : productData?.[selectedSize.id][0]?.desc[0].sub_description;
  const sentencesArray = desc && JSON.parse(desc ?? '');
  const descArry = desc && JSON.parse([sentencesArray]);

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
          console.log(
            'jksdbjklvsbdkjlvbskldbvlsdbvds',
            productData?.medium[0]?.desc,
          );
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
      <ScrollView
        style={styles.productMain}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HorizontalCarousal data={slider} />
        <View style={styles.title}>
          <TextComponent
            text={productData?.product_data?.product_name}
            numberOfLines={1}
            styles={styles.titleInner}
          />
          <TextComponent
            text={`SKU: ${remOption ? title?.sku_rem : size?.sku_num}`}
            styles={styles.sku}
            numberOfLines={2}
          />
        </View>

        <TextComponent
          text={remOption ? title?.title_remediation : productsData[0]?.title}
          styles={styles.pTitle}
        />
        <TextComponent
          text={productsData[0]?.description}
          styles={styles.pDesc}
        />
        <TextComponent
          text={'Select Size'}
          styles={{...styles.pTitle, ...styles.dropTitle}}
        />
        <View>
          <SizePickerView />
        </View>
        {desc && <TextComponent text={'Description'} styles={styles.pTitle} />}
        {desc &&
          descArry?.map(res => {
            console.log('res', res);
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
        {size &&
          Object.entries(size).map(([key, value]) => {
            return (
              !notRequired.includes(key) &&
              value != undefined &&
              value != null && (
                <SizeDetails
                  sizeName={key.replace(/_/g, ' / ')}
                  sizeValue={value}
                />
              )
            );
          })}

        {size?.added_remediation_material && (
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
            return (
              !notReqDimension.includes(key) &&
              value != undefined &&
              value != null && (
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
    </>
  );
};
export default memo(ProductDetailScreen);
