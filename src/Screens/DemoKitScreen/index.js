import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useDemoKitScreen from './useDemoKitScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowrightblack} from '../../Assets';
import {imageUrl} from '../../Utils/Urls';
import DataNotFound from '../../Components/DataNotFound';
import {kitImages} from '../../Utils/localDB';
import {DemoSkeletonScreen} from '../SkeletonScreen';
import {hp} from '../../Config/responsive';

const DemoKitScreen = ({route, navigation}) => {
  const {title, kitData, isloading} = useDemoKitScreen(navigation, route);

  const renderMSDSItem = useCallback(({item, index}) => {
    console.log('img', item);
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => navigation.navigate('DemoKitSingleScreen', item)}>
          <Image source={kitImages['1']} style={styles.iconStyle} />
          <View style={styles.imageStyle}>
            <TextComponent text={item?.title} styles={styles.titleStyle} />
            <TextComponent
              text={item?.short_description}
              styles={styles.descStyle}
            />
          </View>
          <Image
            source={arrowrightblack}
            style={styles.arrowRight}
            resizeMode="contain"
          />
        </Touchable>
      </View>
    );
  });

  const renderSkeleton = useCallback(({item, index}) => {
    return <DemoSkeletonScreen />;
  });

  const dummyMsds = [
    {
      id: 1,
      title: 'Chemical Safety Kit',
      short_description: 'A comprehensive guide to handling chemicals safely.',
      description:
        'This kit provides essential information and tools for chemical safety in laboratories and workplaces.',
      kit_includes: [
        'Safety goggles',
        'Protective gloves',
        'Chemical resistant apron',
        'Emergency wash bottle',
      ],
      image: 'https://via.placeholder.com/150', // Placeholder image URL
      videoUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    },
    {
      id: 2,
      title: 'Fire Safety Kit',
      short_description: 'Learn the basics of fire safety and prevention.',
      description:
        'This kit includes tools and information to help prevent and respond to fires in various environments.',
      kit_includes: [
        'Fire extinguisher',
        'Fire blanket',
        'Smoke detector',
        'Emergency exit plan',
      ],
      image: 'https://via.placeholder.com/150', // Placeholder image URL
      videoUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    },
    {
      id: 3,
      title: 'Personal Protective Equipment Kit',
      short_description: 'Equip yourself with the necessary protective gear.',
      description:
        'This kit offers a selection of personal protective equipment for various industrial and laboratory settings.',
      kit_includes: [
        'Hard hat',
        'Safety glasses',
        'Earplugs',
        'Respirator mask',
      ],
      image: 'https://via.placeholder.com/150', // Placeholder image URL
      videoUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    },
  ];
  return (
    <View style={styles.trainingMain}>
      <HeaderComponent title={title} goBack={() => navigation.goBack()} />

      {isloading && (
        <View style={{marginTop: hp('1')}}>
          <FlatList
            refreshing={false}
            data={[1, 2]}
            renderItem={renderSkeleton}
            contentContainerStyle={
              {
                // alignItems: 'center',
              }
            }
          />
        </View>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.main}>
        <View style={styles.proMain}>
          <FlatList
            refreshing={false}
            data={dummyMsds}
            renderItem={renderMSDSItem}
            contentContainerStyle={
              {
                // alignItems: 'center',
              }
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default memo(DemoKitScreen);

// return (
//   <View style={styles.trainingMain}>
//     <HeaderComponent title={title} goBack={() => navigation.goBack()} />
//     {isloading && kitData.length == 0 ? (
//       <View style={{marginTop: hp('1')}}>
//         <FlatList
//           refreshing={false}
//           data={[1, 2]}
//           renderItem={renderSkeleton}
//           contentContainerStyle={
//             {
//               // alignItems: 'center',
//             }
//           }
//         />
//       </View>
//     ) : kitData.length > 0 ? (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.main}>
//         <View style={styles.proMain}>
//           <FlatList
//             refreshing={false}
//             data={kitData}
//             renderItem={renderMSDSItem}
//             contentContainerStyle={
//               {
//                 // alignItems: 'center',
//               }
//             }
//           />
//         </View>
//       </ScrollView>
//     ) : (
//       !isloading && kitData.length == 0 && <DataNotFound />
//     )}
//   </View>
// );
