import React, { useEffect } from 'react';
import NavigationRouter from './src/navigation/router';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationRouter />
  );
};

export default App;
