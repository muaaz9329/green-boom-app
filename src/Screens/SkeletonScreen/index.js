import React, {memo, useCallback} from 'react';
import {TraningSkeleton} from './TraningSkeleton';
import {View} from 'react-native';
import FileViewerComponent from '../../Components/FileViewerComponent';

const SkeletonScreen = () => {
  const path =
    'https://virtualrealitycreators.com/green-boom/storage/trainingMedia/1703598050.docx';
  return (
    <>
      <View>
        <FileViewerComponent fileUrl={path} fileType="pdf" />
      </View>
    </>
  );
};
export default memo(SkeletonScreen);
