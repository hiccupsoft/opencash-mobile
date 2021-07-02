import React from 'react';
import { View, FlatList, Image } from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import TextStyles from '../../styles/TextStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import CommonStyles from '../../styles/CommonStyles';
import { refreshIcon, roundEdge } from '../../constants/Images';

function HistoryScreen(props) {

  const { navigation } = props;

  return (
    <View style={AuthStyles.authContainer}>
      <View style={AuthStyles.headerView}>
        <CustomText text={'History'} style={TextStyles.textBold24} />
      </View>
    </View>
  );
}
export default HistoryScreen;
