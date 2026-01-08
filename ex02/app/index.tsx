import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

	const buttons = [
		{ title: "7", key: "7" },
		{ title: "8", key: "8" },
		{ title: "9", key: "9" },
		{ title: "C", key: "C" },
		{ title: "AC", key: "AC" },
		{ title: "4", key: "4" },
		{ title: "5", key: "5" },
		{ title: "6", key: "6" },
		{ title: "+", key: "+" },
		{ title: "-", key: "-" },
		{ title: "1", key: "1" },
		{ title: "2", key: "2" },
		{ title: "3", key: "3" },
		{ title: "x", key: "x" },
		{ title: "/", key: "/" },
		{ title: "0", key: "0" },
		{ title: ".", key: "dot" },
		{ title: "00", key: "00" },
		{ title: "=", key: "=" },
	];

	return (
		<View style={styles.container}>
			<View style={styles.headline}>
				<Text style={styles.title}>Calculator</Text>
			</View>
			<View style={styles.displayZone}>
				<Text style={styles.displayText}>0</Text>
				<Text style={styles.displayText}>0</Text>
			</View>
			<View style={styles.calculeZone}>
				{buttons.map(item => (
					<TouchableOpacity
						key={item.key}
						style={styles.button}
						onPress={() => console.log(`button pressed: ${item.title}`)}
					>
						<Text style={styles.buttonText}>{item.title}</Text>
					</TouchableOpacity>
				))}
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
		flex: 0.10
	},
	title: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold"
	},
	displayZone: {
		backgroundColor: "#778899",
		flex: 0.35,
		gap: 4,
		padding: 10,
		paddingRight: 20,
		alignItems: "flex-end"
	},
	displayText: {
		fontSize: 20,
		color: "#d3d3d3",
		fontWeight: 'bold',
	},
	calculeZone: {
		flex: 0.55,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignContent: 'space-between',
		backgroundColor: "#6495ed",
	},
	button: {
		backgroundColor: "#6495ed",
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.6,
		shadowRadius: 3.84,
		width: '20%', // 5 boutons par ligne
		maxWidth: '20%',
		height: '25%', // force 4 rangées pour occuper toute la hauteur
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#000',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: "center"
	},
});