import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    welcomeHeader: {
        color: '#000',
        fontSize: 40,
        marginTop: 50,
        textAlign: 'center'
    },
    mainActionButton: {
        width: 280,
        height: 280,
        borderRadius: 140,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00CD5E'
    },
    mainActionText: {
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold'
    }
});

export default HomeScreenStyle;