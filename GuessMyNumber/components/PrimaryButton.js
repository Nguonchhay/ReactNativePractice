import {
    StyleSheet,
    Pressable,
    Text,
    View
} from "react-native";

const PrimaryButton = ({ text, onPress }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={onPress} android_ripple={{ color: '#74063c' }}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 5,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
       
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    },
});

export default PrimaryButton;