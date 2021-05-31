import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';
import Navbar from './src/Navbar';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.app}>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Todo todo={item} index={index} onRemove={removeTodo} />
          )}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginBottom: 110,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
