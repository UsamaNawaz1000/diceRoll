import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurrencyButton from '../components/ui/CurrencyButton';
import { currencyByRupee } from '../app/constants';

export default function CurrencyApp() {
    const [inputValue, setInputValue] = useState<string>('');
    const [resultValue, setResultValue] = useState<string>('');
    const [targetCurrency, setTargetCurrency] = useState<string>('');

    const convertCurrency = (currency: typeof currencyByRupee[0]) => {
        if (!inputValue) {
            Alert.alert('Enter Amount', 'Please enter amount in Rupees');
            return;
        }

        const inputNumber = parseFloat(inputValue);
        if (isNaN(inputNumber)) {
            Alert.alert('Invalid Input', 'Please enter a valid number');
            return;
        }

        const convertedValue = inputNumber * currency.value;
        setResultValue(`${currency.symbol} ${convertedValue.toFixed(2)}`);
        setTargetCurrency(currency.name);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.rupeesContainer}>
                        <View style={styles.rupeeSymbol}>
                            <Text style={styles.rupeeSymbolText}>₹</Text>
                        </View>
                        <View style={styles.rupees}>
                            <TextInput
                                style={styles.input}
                                maxLength={14}
                                value={inputValue}
                                onChangeText={setInputValue}
                                placeholder="Enter amount"
                                keyboardType="numeric"
                                placeholderTextColor="#666"
                            />
                        </View>
                    </View>

                    {resultValue && targetCurrency && (
                        <View style={styles.resultContainer}>
                            <Text style={styles.resultText}>
                                {inputValue} INR = {resultValue}
                            </Text>
                        </View>
                    )}
                </View>

                {/* Bottom Container - Currency List */}
                <View style={styles.bottomContainer}>
                    <Text style={styles.currencyTitle}>Select Currency</Text>
                    <FlatList
                        data={currencyByRupee}
                        keyExtractor={(item) => item.name}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.currencyButton,
                                    targetCurrency === item.name && styles.selectedCurrency
                                ]}
                                onPress={() => convertCurrency(item)}
                            >
                                <CurrencyButton
                                    name={item.name}
                                    flag={item.flag}
                                />
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={styles.flatListContent}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121212',
    },
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    rupeesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E1E1E',
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#333',
    },
    rupeeSymbol: {
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderRightColor: '#333',
    },
    rupeeSymbolText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFD700',
    },
    rupees: {
        flex: 1,
        paddingHorizontal: 15,
    },
    input: {
        fontSize: 24,
        color: '#FFFFFF',
        padding: 0,
    },
    resultContainer: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#333',
    },
    resultText: {
        fontSize: 20,
        color: '#4CAF50',
        fontWeight: '600',
    },
    bottomContainer: {
        flex: 3,
        paddingHorizontal: 10,
    },
    currencyTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 10,
        marginLeft: 10,
    },
    flatListContent: {
        paddingBottom: 20,
    },
    currencyButton: {
        flex: 1,
        margin: 8,
        padding: 15,
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#333',
        minHeight: 100,
    },
    selectedCurrency: {
        borderColor: '#FFD700',
        borderWidth: 2,
        backgroundColor: '#2A2A2A',
    },
});