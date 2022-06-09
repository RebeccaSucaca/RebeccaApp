import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {SetColor} from '../../style/SetColor';

// import data from '../../../../db.json';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');
  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };
  const addTodoHandler = () => {
    console.log('newTodoItem', newTodoItem);
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };
  // console.log(data);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={SetColor.fontColorLight}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <TouchableOpacity>
        <Text style={styles.buttonText} onPress={addTodoHandler}>
          <Icon name="pluscircleo" size={15} color={SetColor.themeColor} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomColor: 'darkgray',
    borderBottomWidth: 1,
  },
  buttonText: {
    padding: 10,
  },
});

export default TodoInsert;
