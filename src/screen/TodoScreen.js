/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import CustomHeader from '../CustomHeader';
import TodoInsert from './TodoScreen/TodoInsert';
import TodoList from './TodoScreen/TodoList';

function TodoScreen({navigation}) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos([
      {
        id: Math.random().toString(),
        textValue: 'Drawer Navigator',
        checked: true,
      },
      {
        id: Math.random().toString(),
        textValue: 'Bottom Tabs Navigator',
        checked: true,
      },
      {
        id: Math.random().toString(),
        textValue: 'Stack Navigator',
        checked: true,
      },
      {
        id: Math.random().toString(),
        textValue: 'FetchApi',
        checked: true,
      },
      {
        id: Math.random().toString(),
        textValue: 'I look forward to your reply',
        checked: false,
      },
      {
        id: Math.random().toString(),
        textValue: 'Nice To Meet You',
        checked: false,
      },
    ]);
  }, []);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Todo" isHome={true} navigation={navigation} />
      <ScrollView style={[{flex: 1}]}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default TodoScreen;
