import { Text, StyleSheet } from 'react-native';
import COLORS from '../constants/Color';

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.action500,
        marginTop: 25,
        textAlign: 'center',
        borderColor: COLORS.action500,
        borderWidth: 2,
        padding: 15,
    },
});

export default Title;