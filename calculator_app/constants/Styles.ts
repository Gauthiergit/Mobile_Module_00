import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
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
	displayZone: {
		backgroundColor: "#778899",
		flex: 0.35,
		gap: 4,
		padding: 10,
		paddingRight: 20,
		alignItems: "flex-end"
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
		width: '20%',
		maxWidth: '20%',
		height: '25%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});