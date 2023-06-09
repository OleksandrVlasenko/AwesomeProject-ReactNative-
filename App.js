import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import { useFonts } from "expo-font";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			{/* <LoginScreen /> */}
			<RegistrationScreen />
			<PostsScreen />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "flex-end",
	},
});
