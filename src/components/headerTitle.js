import React from 'react';
import {Image} from 'react-native';

function HeaderTitle({iconName}) {
  return (
    <Image
      source={iconName}
      style={{alignSelf: 'center'}}
      resizeMode="contain"
    />
  );
}

export default HeaderTitle;
