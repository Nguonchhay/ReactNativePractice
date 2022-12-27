import { Text, StyleSheet, Platform } from 'react-native';
import COLORS from '../../constants/Color';

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        color: COLORS.action500,
        marginTop: 25,
        textAlign: 'center',
        borderColor: '#fff',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ios: 0, android: 2}),
        padding: 15,
    },
});

export default Title;