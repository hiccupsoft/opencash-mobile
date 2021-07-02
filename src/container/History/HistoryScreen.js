import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import TextStyles from '../../styles/TextStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import CommonStyles from '../../styles/CommonStyles';
import { refreshIcon, roundEdge, refreshBig, plus, updateIcon, cancelIcon } from '../../constants/Images';
import Modal from 'react-native-modal';

const data = [{}, {}, {}, {}, {}, {}, {}];

const historyFilter = [{ key: "All History" }, { key: 'Orders' }, { key: 'Transfer' }, { key: 'Alerts' }, { key: 'transfer' }]

function HistoryScreen(props) {

  const [filter, setFilter] = useState('All History');
  const [filterModal, setFilterModal] = useState(false);

  const { navigation } = props;

  const renderHistory = ({ item, index }) => {
    return (
      <TouchableOpacity style={SpaceStyles.spaceHorizontal} onPress={() => setFilterModal(true)}>
        <View style={SpaceStyles.alignSpaceBlock}>
          <View>
            <View style={SpaceStyles.rowFlex}>
              <Image source={refreshIcon} resizeMode="contain" />
              <CustomText
                text={'NFLX Limit Buy'}
                style={[TextStyles.textMedium16DarkBlack, SpaceStyles.left2]}
              />
            </View>
            <View style={SpaceStyles.rowFlex}>
              <CustomText
                text={'Mar 5, 2020'}
                style={TextStyles.textMedium14}
              />
              <CustomText
                text={'Canceled'}
                style={[TextStyles.textBold14, SpaceStyles.left2]}
              />
            </View>
          </View>
          <View style={SpaceStyles.rowFlex}>
            <CustomText text={'-$1,200.45'} style={TextStyles.textSemiBold16} />
            <Image
              source={roundEdge}
              resizeMode="contain"
              style={SpaceStyles.left5}
            />
          </View>
        </View>
        <View style={CommonStyles.lineView} />
      </TouchableOpacity>
    );
  };

  const renderHistoryFilter = ({ item, index }) => {
    return (
      <TouchableOpacity style={filter == item.key ? CommonStyles.selectedHistoryFilterContainer : CommonStyles.historyFilterContainer} onPress={() => setFilter(item.key)}>
        <CustomText text={item.key} style={TextStyles.textSemiBold15DarkBlack} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={AuthStyles.authContainer}>
      <View style={AuthStyles.headerView}>
        <CustomText text={'History'} style={TextStyles.textBold24} />
      </View>
      <View style={[SpaceStyles.spaceHorizontal, SpaceStyles.vertical1]}>
        <FlatList
          data={historyFilter}
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={renderHistoryFilter}
          style={SpaceStyles.top2}
        />
      </View>
      <FlatList
        data={data}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        renderItem={renderHistory}
        style={SpaceStyles.top2}
      />
      <Modal
        isVisible={filterModal}
        onBackdropPress={() => setFilterModal(false)}
        onBackButtonPress={() => setFilterModal(false)}
        onSwipeComplete={() => setFilterModal(false)}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        swipeDirection="down"
        style={{ margin: 0 }}>
        <View style={CommonStyles.modalView}>
          <View style={CommonStyles.modalTopLine} />
          <Image source={refreshBig} />
          <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.vertical1]}>
            <CustomText text={'NFLX Limit Buy'} style={TextStyles.textSemiBold16} />
            <CustomText text={'-$1,200.45 '} style={TextStyles.textSemiBold16} />
          </View>
          <Text>
            <CustomText text={'Mar 5, 2020  '} style={[TextStyles.textMedium14]} />
            <CustomText text={'Open'} style={[TextStyles.textBold14]} />
          </Text>
          <View style={CommonStyles.lineView} />
          <View style={[SpaceStyles.rowFlex, SpaceStyles.vertical1]}>
            <Image source={plus} />
            <CustomText text={'Buy more'} style={[TextStyles.textSemiBold16, SpaceStyles.left3]} />
          </View>
          <View style={[SpaceStyles.rowFlex, SpaceStyles.vertical1]}>
            <Image source={updateIcon} />
            <CustomText text={'Update this order'} style={[TextStyles.textSemiBold16, SpaceStyles.left3]} />
          </View>
          <View style={[SpaceStyles.rowFlex, SpaceStyles.vertical1]}>
            <Image source={cancelIcon} />
            <CustomText text={'Cancel this order'} style={[TextStyles.textSemiBold16, SpaceStyles.left3]} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default HistoryScreen;
