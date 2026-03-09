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
        name="curencyApp" 
        options={{ 
          title: 'Currency App',
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
        name="Tic-tac-toe" 
        options={{ 
          title: 'Tik-tac-toe game',
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
        }}/>
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}