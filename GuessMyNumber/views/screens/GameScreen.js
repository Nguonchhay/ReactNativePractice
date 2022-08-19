import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Title from '../../components/Title';

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guest</Title>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 25
    },
});

export default GameScreen;