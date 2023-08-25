import {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

export default function SaerchBar({clickHandler}) {
  const [value, setValue] = useState('');

  const onTextChangeHandler = text => {
    setValue(text);
  };

  const onPressHandler = () => {
    clickHandler(value);
  };

  return (
    <View style={style.container}>
      <TextInput
        placeholder="enter what you want to search"
        onChangeText={text => onTextChangeHandler(text)}
        value={value}
        style={style.input}
      />
      <Button title="search" onPress={onPressHandler} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    flex: 3,
    marginRight: 20,
  },
  button: {
    flex: 2,
  },
});
