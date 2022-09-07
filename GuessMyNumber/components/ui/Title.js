import { Text, StyleSheet } from 'react-native';
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
        borderWidth: 2,
        padding: 15,
    },
});

export default Title;