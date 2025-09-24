import { ThemeContext } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { palette } from "../../css_variables/colors";
// import {} from 'react-icons/fa'
import { useRouter } from "expo-router";
import { FaSignOutAlt } from "react-icons/fa";


export default function AppHeader() {

    const router = useRouter();

    const logout = () => {
        router.push('/login/Login')
        localStorage.clear()

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PIUMP</Text>
            <Pressable onTouchStart={() => logout}>
                <FaSignOutAlt />
            </Pressable>
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