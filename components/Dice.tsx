import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';
import * as Haptics from 'expo-haptics';

interface diceProps {
    imageSource: ImageSourcePropType;
    onPress?: () => void;
    children?: React.ReactNode;
    size?: number;
}

const Dice: React.FC<diceProps> = ({
    imageSource,
    onPress,
    children,
    size = 100
}) => {
    const handlePress = async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        if (onPress) {
            onPress();
        }
    };

    // ✅ Return JSX from the main component, NOT from handlePress
    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
            <View style={[styles.container, { width: size, height: size }]}>
                <Image
                    source={imageSource}
                    style={[styles.image, { width: size, height: size }]}
                    resizeMode="contain"
                />
                {children}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        borderRadius: 10,
    },
});

export default Dice;