import { StyleSheet } from "react-native";
import { scale } from 'react-native-size-matters';
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    Button: {
        justifyContent: 'center',
        padding: scale(15),
        backgroundColor: colors.primary,
        flexDirection: 'row'
    },
    ButtonText: {
        fontSize: scale(15),
        color: colors.white
    }
});