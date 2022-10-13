import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const AddToDo = ({ submitHandler }) => {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder='New To Do' onChangeText={changeHandler}
                style={styles.input}
            ></TextInput>
            <Button onPress={() => { submitHandler(text) }} title='Add to do' color='coral'></Button>
        </View>
    );
};

export default AddToDo;

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    input: {
        marginVertical: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})