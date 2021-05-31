import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, index, onRemove }) => {
  const string = `${index + 1}. ${todo.title}`;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('pressed', todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{string}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
});
