import React from 'react';
import { Image, Text, View } from 'react-native';
import CustomText from '../components/CustomText';
import TextStyles from '../styles/TextStyles';

function HeaderTitleText({ titleName, value }) {
    return (
        <>
            {!value &&
                <CustomText text={titleName} style={[TextStyles.textSemiBold16, { alignSelf: 'center' }]} />
            }
            {value &&
                <View>
                    <CustomText text={titleName} style={[TextStyles.textSemiBold16, { alignSelf: 'center' }]} />
                    <CustomText text={value} style={[TextStyles.textMedium14DarkGray, { alignSelf: 'center' }]} />
                </View>
            }
        </>
    );
}

export default HeaderTitleText;
