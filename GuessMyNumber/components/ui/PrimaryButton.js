import {
    StyleSheet,
    Pressable,
    Text,
    View
} from "react-native";
import COLORS from "../../constants/Color";


const PrimaryButton = ({ children, onPress }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={onPress} android_ripple={{ color: COLORS.primary600 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
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
        backgroundColor: COLORS.primary500,
        
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