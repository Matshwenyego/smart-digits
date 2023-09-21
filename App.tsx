import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AppEntry from './src/navigation';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD2DarkTheme,
  MD2LightTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

const CombinedDarkTheme = merge(MD2DarkTheme, NavigationDarkTheme);

const App = () => {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <AppEntry />
        <StatusBar style="light" />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;