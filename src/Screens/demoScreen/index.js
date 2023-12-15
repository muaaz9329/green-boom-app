import React, {memo} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

import useTraining from './useTrainingScreen';

const TrainingScreen = ({navigation}) => {
  const {} = useTraining(navigation);
  return (
    <ScrollView style={styles.logInMain}>
      <Text>asd</Text>
    </ScrollView>
  );
};
export default memo(TrainingScreen);
