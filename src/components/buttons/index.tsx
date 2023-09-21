import React, { FC }from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface Props {
    text: string;
    onPress: () => void;
}

 const Button: FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
