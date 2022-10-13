import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My To Dos</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: 'coral'
    },
    title: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})