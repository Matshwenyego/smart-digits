import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    screen: {
      flex: 0.3, 
      borderColor: '#FFFFFF', 
      justifyContent: 'flex-end',
      padding: 5
    },
    numpad: { 
      flex: 0.7, 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
      justifyContent: 'center', 
      alignContent: 'center'
    },
    row: { 
      flexDirection: 'row', 
      gap: 5, 
      padding: 5 
    }
});

export default styles;