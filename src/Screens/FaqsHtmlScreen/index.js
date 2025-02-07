import React, {memo, useCallback, useEffect, useState} from 'react';
import {useFaqsHtmlScreen} from './useFaqsHtmlScreen';
import {ScrollView, View} from 'react-native';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {faqHtml} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {hp} from '../../Config/responsive';

const FaqsHtmlScreen = ({route, navigation}) => {
  // const {} = useFaqsHtmlScreen(navigation, route);
  console.log('asd', route.params);
  const item = route?.params;

  const clearContent = item => {
    if (item) {
      console.log('typrof', typeof item);
      const dataAsString = item.toString();
      const cleanedHtmlContent = dataAsString.replace(
        /<(p|h1|h2|h3|h4|h5|h6)><br><\/\1>/g,
        '',
      );
      console.log('kuch', cleanedHtmlContent);
      return cleanedHtmlContent;
    }
    // console.log('dd', dataAsString);
  };

  const {width} = useWindowDimensions();

  return (
    <View
      style={{backgroundColor: 'white', height: hp('100'), paddingBottom: 10}}>
      <HeaderComponent
        title={item?.title}
        // search={true}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: 'white',
          padding: 10,
          paddingBottom: 20,
        }}>
        <RenderHtml
          contentWidth={width}
          source={{html: clearContent(item?.faq_text)}}
        />
      </ScrollView>
    </View>
  );
};
export default memo(FaqsHtmlScreen);
