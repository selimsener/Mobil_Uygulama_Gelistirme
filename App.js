// App.js
import React from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import {PaperProvider} from "react-native-paper";

export default function App() {
  return (
      <AuthProvider>
          <PaperProvider>
              <AppNavigator />
          </PaperProvider>
      </AuthProvider>
  );
}
