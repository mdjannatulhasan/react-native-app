import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./components/Countries";

export default function App() {
    return (
        <View style={styles.container}>
            <Countries></Countries>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
