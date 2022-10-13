import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ToDoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.text}>{item?.text}</Text>
        </TouchableOpacity>
    );
};

export default ToDoItem;

const styles = StyleSheet.create({
    text: {
        padding: 15,
        borderColor: '#dddddd',
        borderRadius: 5,
        borderStyle: 'dashed',
        borderWidth: 1,
        marginTop: 20
    },
})