import React, {useCallback} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {TextComponent} from './TextComponent';
import {goBack} from '../Utils';
import {backIcon, searchIcon} from '../Assets';
import {Touchable} from './Touchable';
import TabButton from './TabButton';

export const HeaderComponent = ({
  onPress,
  title,
  search,
  searchFunction,
  isCategory,
  categoryData,
}) => {
  const renderItem = useCallback(({item, index}) => {
    return (
      <View>
        <TabButton style={styles.tabs} title={item.title} />
      </View>
    );
  });

  return (
    <View style={styles.headerTop}>
      <View style={styles.headerInner}>
        <Touchable onPress={goBack}>
          <Image
            source={backIcon}
            style={styles.backBtn}
            resizeMode="contain"
          />
        </Touchable>
        <TextComponent text={title} numberOfLines={1} styles={styles.heading} />
        <Touchable onPress={searchFunction}>
          <Image
            source={search ? searchIcon : ''}
            style={styles.searchBtn}
            resizeMode="contain"
          />
        </Touchable>
      </View>
      <View style={styles.btnMain}>
        {isCategory && (
          <FlatList
            refreshing={false}
            data={categoryData}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              // marginTop: hp('2.5'),
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTop: {
    backgroundColor: Colors.black,
    borderRadius: 15,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
  },
  headerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5'),
    paddingTop: hp('4'),
    paddingBottom: hp('3'),
    // verticalAlign: 'middle',
  },
  heading: {
    color: Colors.white,
    fontSize: hp('2.5'),
  },
  backBtn: {
    width: wp('6'),
    height: hp('3.5'),
  },
  searchBtn: {
    width: wp('5'),
    height: hp('3.5'),
  },
  tabs: {
    // width: '110%',
    marginRight: wp('2.2'),
    marginBottom: hp('2.5'),
  },
  btnMain: {
    marginLeft: wp('5'),
  },
});
