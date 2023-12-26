import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList, Linking} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useMSDS from './useMSDScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {msdsData} from '../../Utils/localDB';
import {imageUrl} from '../../Utils/Urls';

const MSDScreen = ({route, navigation}) => {
  const {title, category, iconType} = useMSDS(navigation, route);

  const renderMSDSItem = useCallback(({item, index}) => {
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => Linking.openURL(imageUrl(item?.file))}>
          <View style={styles.imageStyle}>
            <Image
              source={iconType[item?.file_type]}
              style={styles.iconStyle}
            />
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
            data={category}
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
