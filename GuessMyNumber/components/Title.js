import { Text, StyleSheet } from 'react-native';


function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        marginTop: 25,
        textAlign: 'center',
        borderColor: '#ddb52f',
        borderWidth: 2,
        padding: 15,
    },
});

export default Title;