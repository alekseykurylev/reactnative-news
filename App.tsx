import React from 'react';
import {Navigate} from './navigate';
import {NewsProvider} from './components/NewsContext';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <NewsProvider>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <Navigate />
      </SafeAreaProvider>
    </NewsProvider>
  );
};

export default App;
