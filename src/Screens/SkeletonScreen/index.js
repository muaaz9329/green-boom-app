import React, {memo, useCallback} from 'react';
import {TraningSkeleton} from './TraningSkeleton';

const SkeletonScreen = () => {
  return (
    <>
      <TraningSkeleton />
    </>
  );
};
export default memo(SkeletonScreen);
