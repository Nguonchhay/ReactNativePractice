import { Dimensions, StyleSheet, Text, View } from "react-native";
import COLORS from './../../constants/Color';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: COLORS.action500,
        padding: deviceWidth < 380 ? 12: 25,
        margin: 25,
        borderRadius: 8,
    },
    numberText: {
        color: COLORS.action500,
        fontSize: 36,
        fontWeight: 'bold',
    },
});

export default NumberContainer;