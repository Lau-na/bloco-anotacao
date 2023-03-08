import { StyleSheet } from "react-native";
import theme from "../../style/theme.style";
import { headingText, textInput } from "../../style/common.style";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: theme.CONTAINER_PADDING,
        alignItems: 'center'
    },

    titleHeading: {
        ...headingText
    },

    titleTextInput: {
        ...textInput
    },

    textAreaTitle: {
        ...headingText,
        fontWeight: theme.FONT_WEIGHT_LIGHT,
        fontStyle: 'italic'        
    }
});