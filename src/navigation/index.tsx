import { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Budget from '../screens/budget';
import Calculator from '../screens/calculator';
import Tax from '../screens/tax';

const AppEntry:FC = () => {
  const { Navigator, Screen } = createDrawerNavigator();
  return (
    <Navigator 
      screenOptions={({ navigation }) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ padding: 10 }}>
              <Icon name={"menu"} size={24} color={'#FFFFFF'}/>
            </TouchableOpacity>
          )
        },
      })}>
        <Screen 
          name="Calculator" 
          component={Calculator} 
          options={{ 
            headerTitle: '',
            drawerIcon: () => (
              <View>
                <Icon name={"calculator"} size={24} color={'#FFFFFF'} />
              </View>
            )
          }}
        />
        <Screen 
          name="Budget" 
          component={Budget} 
          options={{ 
            headerTitle: '', 
            drawerIcon: () => (
              <View>
                <Icon name={"cash-100"} size={24} color={'#FFFFFF'} />
              </View>
            )
          }}
        />
        <Screen 
          name="Tax" 
          component={Tax} 
          options={{ 
            headerTitle: '', 
            drawerIcon: () => (
              <View>
                <Icon name={"cash-register"} size={24} color={'#FFFFFF'} />
              </View>
            )
          }}
        />
    </Navigator>
  );
}

export default AppEntry;