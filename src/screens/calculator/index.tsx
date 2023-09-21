import { FC, useState, useEffect, useCallback } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { isEmpty } from 'lodash';
import Button from '../../components/buttons';
import styles from './styles';

 const Calculator: FC = () => {
  const [text, setText] = useState<string>('');

  const on_press = useCallback(
    (item: string) => {
      setText((prev: string) => prev + item);
    },
    [],
  );

  const get_sum = useCallback(
    async () => {
      const sum = await eval(text);
      setText(sum?.toString());
    },
    [text],
  );

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={{ fontSize: 40, textAlign: 'left', color: '#FFFFFF' }}>{text}</Text>
      </View>
      <View style={styles.numpad}>
        <View style={styles.row}>
          <Button text={'C'} onPress={() => setText('')} 
          />          
          <Button text={'+/-'} onPress={() => on_press('+/-')} />
          <Button text={'%'} onPress={() => on_press('%')} />
          <Button text={'+'} onPress={() => on_press('+')} />
        </View>
        <View style={styles.row}>
          <Button text={'1'} onPress={() => on_press('1')} />
          <Button text={'2'} onPress={() => on_press('2')} />
          <Button text={'3'} onPress={() => on_press('3')} />
          <Button text={'-'} onPress={() => on_press('-')} />
        </View>
        <View style={styles.row}>
          <Button text={'4'} onPress={() => on_press('4')} />
          <Button text={'5'} onPress={() => on_press('5')} />
          <Button text={'6'} onPress={() => on_press('6')} />
          <Button text={'/'} onPress={() => on_press('/')} />
        </View>
        <View style={styles.row}>
          <Button text={'7'} onPress={() => on_press('7')} />
          <Button text={'8'} onPress={() => on_press('8')} />
          <Button text={'9'} onPress={() => on_press('9')} />
          <Button text={'*'} onPress={() => on_press('*')} />
        </View>
        <View style={styles.row}>
          <Button text={'0'} onPress={() => on_press('0')} />
          <Button text={'.'} onPress={() => on_press('.')} />
          <Button text={'DEL'} onPress={() => {
              if (!isEmpty(text)) setText(text.slice(0, -1));
            }} 
          />
          <Button text={'='} onPress={() => get_sum()} />
        </View>
      </View>
    </View>
  );
}

export default Calculator;
