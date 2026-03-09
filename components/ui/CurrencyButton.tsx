import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): React.ReactElement => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    flag: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: 4
    },
    buttonContainer: {
        alignItems: 'center'
    },
    country: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 4
    }
});

export default CurrencyButton;