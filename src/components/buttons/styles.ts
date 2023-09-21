import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, 
        borderColor: '#FFFFFF',
        flex: 0.25, 
        height: height / 9, 
        borderRadius: 25, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text: {
      fontSize: 20, 
      fontWeight: 'bold',
      color: '#FFFFFF'
    }
});

export default styles;