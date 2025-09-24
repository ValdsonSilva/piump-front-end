import { ThemeContext } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../../css_variables/colors";


export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PIUMP</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 250
    },
    title: {
        color: palette.mainGreen,
        fontFamily: "Baloo",
        fontSize: 40,
        fontStyle: "normal",
        fontWeight: 400,
        // lineHeight: "normal",
    }
})