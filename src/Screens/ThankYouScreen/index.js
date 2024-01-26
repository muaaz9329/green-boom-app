import React, {memo, useCallback} from 'react';
import {Image, View} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import useThankYouScreen from './useThankYouScreen';
import {styles} from './styles';
import {Touchable} from '../../Components/Touchable';
import {arrowLeft, comingSoon, thumbUp} from '../../Assets';

const ThankYouScreen = ({navigation}) => {
  const {} = useThankYouScreen(navigation);

  return (
    <View style={styles.main}>
      <Image source={comingSoon} style={styles.thumbImg} />
      <TextComponent text={'Thanks!'} styles={styles.title} />
      <TextComponent
        text={'We will send you a price quote shortly.'}
        styles={styles.subTitle}
      />
      <View style={styles.btnMain}>
        <Touchable onPress={() => navigation.goBack()} style={styles.btnstyle}>
          <Image source={arrowLeft} style={styles.btnImg} />
          <TextComponent text={'Back to Home'} styles={styles.btnText} />
        </Touchable>
      </View>
    </View>
  );
};
export default memo(ThankYouScreen);
