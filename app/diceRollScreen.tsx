// app/dicerollscreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import * as Haptics from 'expo-haptics';
import Dice from '../components/Dice';
import { router } from 'expo-router';

// Import dice images
const diceImages = {
  1: require('../assets/diceimages/dice1.png'),
  2: require('../assets/diceimages/dice2.png'),
  3: require('../assets/diceimages/dice3.png'),
  4: require('../assets/diceimages/dice4.png'),
  5: require('../assets/diceimages/dice5.png'),
  6: require('../assets/diceimages/dice6.png'),
};

export default function DiceRollScreen() {
  const [currentValue, setCurrentValue] = useState<number>(1);
  const [rolling, setRolling] = useState<boolean>(false);

  const rollDice = async () => {
    if (rolling) return;
    
    setRolling(true);
    
    // Simulate rolling animation with haptic feedback
    for (let i = 0; i < 10; i++) {
      setTimeout(async () => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        setCurrentValue(randomValue);
        
        // Light haptic for each "tick" of the roll
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }, i * 50);
    }
    
    // Final result with success haptic
    setTimeout(async () => {
      const finalValue = Math.floor(Math.random() * 6) + 1;
      setCurrentValue(finalValue);
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setRolling(false);
      
      // Show alert with result
      Alert.alert('Dice Rolled!', `You got ${finalValue}`);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roller</Text>
      
      {/* Basic Dice usage */}
      <Dice 
        imageSource={diceImages[currentValue as keyof typeof diceImages]} 
        onPress={rollDice}
        size={200}
      />
      
      {/* Example of using children - adds a label */}
      <Dice 
        imageSource={diceImages[currentValue as keyof typeof diceImages]}
        size={100}
        onPress={rollDice}
      >
        <Text style={styles.diceLabel}>Roll me!</Text>
      </Dice>
      
      <Text style={styles.result}>Result: {currentValue}</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title={rolling ? "Rolling..." : "Roll Dice"} 
          onPress={rollDice}
          disabled={rolling}
          color="#007AFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  result: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 20,
    color: '#555',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  diceLabel: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    bottom: 10,
  },
});