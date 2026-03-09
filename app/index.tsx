// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Href, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigateToDiceRoll = () => {
    router.push('/diceRollScreen' as Href);
  };
  
  const navigateToCurrencyApp = () => {
    router.push('/currencyApp' as Href);
  }

  const navigateToTicTacToe= () =>{
    router.push('/TicTacToe' as Href);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Game App</Text>
        <Text style={styles.subtitle}>Select a game to play</Text>
      </View>

      <View style={styles.menuContainer}>
        {/* Dice Roll Game Option */}
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={navigateToDiceRoll}
          activeOpacity={0.7}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="game-controller" size={40} color="#007AFF" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Dice Roller</Text>
            <Text style={styles.menuDescription}>
              Roll the dice and test your luck!
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={navigateToCurrencyApp}
          activeOpacity={0.7}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="game-controller" size={40} color="#007AFF" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Currency App</Text>
            <Text style={styles.menuDescription}>
              convert currencies and check exchange rates! (Coming Soon)
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={navigateToTicTacToe}
          activeOpacity={0.7}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="game-controller" size={40} color="#007AFF" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Tic tac toe</Text>
            <Text style={styles.menuDescription}>
              Play the classic Tic Tac Toe game!
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>

        {/* You can add more games here later */}
        <TouchableOpacity 
          style={[styles.menuItem, styles.comingSoon]}
          disabled={true}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="construct" size={40} color="#999" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={[styles.menuTitle, styles.comingSoonText]}>
              More Games Coming Soon
            </Text>
            <Text style={styles.menuDescription}>
              Stay tuned for updates!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
  },
  comingSoon: {
    opacity: 0.6,
  },
  comingSoonText: {
    color: '#999',
  },
});