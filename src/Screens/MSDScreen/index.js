import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useMSDS from './useMSDScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {msdsData} from '../../Utils/localDB';

const MSDScreen = ({route, navigation}) => {
  const {title} = useMSDS(navigation, route);

  const renderMSDSItem = useCallback(({item, index}) => {
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => onPress(item?.routeName, item)}>
          <View style={styles.imageStyle}>
            <Image source={item?.image} style={styles.iconStyle} />
            <TextComponent
              text={item?.title}
              numberOfLines={2}
              styles={styles.titleStyle}
            />
          </View>
        </Touchable>
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
            data={msdsData}
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
export default memo(MSDScreen);
