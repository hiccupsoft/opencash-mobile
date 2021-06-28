import React from 'react';
import { Image } from 'react-native';
import CustomText from '../components/CustomText';
import TextStyles from '../styles/TextStyles';

function HeaderTitleText({ titleName }) {
    return (
        <CustomText text={titleName} style={[TextStyles.textSemiBold16, { alignSelf: 'center' }]} />
    );
}

export default HeaderTitleText;
