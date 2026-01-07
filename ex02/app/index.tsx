import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.headline}>
				<Text style={styles.title}>Calculator</Text>
			</View>
			<View style={styles.displayZone}>
				<Text style={styles.displayText}>0</Text>
				<Text style={styles.displayText}>0</Text>
			</View>
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headline: {
		backgroundColor: "#6495ed",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 20,
		paddingTop: 50,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elevation: 10,
		zIndex: 1,
	},
	title: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold"
	},
	displayZone: {
		backgroundColor: "#778899",
		flex: 1,
		gap: 4,
		padding: 10,
		paddingRight: 20,
		alignItems: "flex-end"
	},
	displayText: {
		fontSize: 20,
		color: "#d3d3d3"
	}

});