import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import Header from "./Header";

export default function Countries() {
    const [todos, setToDos] = useState([
        { text: 'Buy Coffe', key: 1 },
        { text: 'Create an app', key: 2 },
        { text: 'Play on the switch', key: 3 },
    ]);
    return (
        <View>
            <Header></Header>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <Text>{item.text}</Text>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20
    },
    list: {
    }
})