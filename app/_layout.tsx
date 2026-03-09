import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'My App',
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="currencyApp"  
          options={{ 
            title: 'Currency App',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen 
          name="TicTacToe"  
          options={{ 
            title: 'Tic Tac Toe Game',  // Fixed title
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
            headerShown:false,
          }}
        />
        <Stack.Screen 
          name="diceRollScreen"
          options={{ 
            title: 'Dice Roller',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen 
          name="modal"
          options={{ 
            presentation: 'modal',
            title: 'Modal',
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}