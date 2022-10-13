import { View, Text, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";

export default function Countries() {
    const [todos, setToDos] = useState([
        { text: 'Buy Coffe', key: 1 },
        { text: 'Create an app', key: 2 },
        { text: 'Play on the switch', key: 3 },
    ]);

    const pressHandler = (key) => {
        setToDos((prevToDos) => {
            return prevToDos.filter(todo => todo.key != key)
        })
    }
    const submitHandler = (text) => {
        if (text.length > 3) {
            setToDos((prevToDos) => {
                return [{ text: text, key: Math.random().toString }, ...prevToDos]
            })
        } else {
            Alert.alert('Ooops!', 'ToDos must be four character long', [
                { text: 'Understood' }
            ])
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View>
                <Header></Header>
                <AddToDo submitHandler={submitHandler}></AddToDo>
                <View style={styles.content}>
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <ToDoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20
    },
    list: {
    }
})