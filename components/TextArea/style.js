import { StyleSheet } from 'react-native';
import theme from "../../style/theme.style";
import { textInput } from "../../style/common.style";

export default StyleSheet.create({
    textArea: {
        ...textInput,
        flex: 1,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_LIGHT,
    }
});
