import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
		<Text style={styles.default_text}>Korben Dallas MultiPass</Text>
		<TouchableOpacity
	  		style={styles.button}
			onPress={() => console.log("Button pressed")}
		>
			<Text style={styles.buttonText}>C'est green ?</Text>
		</TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: "center",
        alignItems: "center",
		gap: 10
	},
	default_text: {
		backgroundColor: "#ff8c00",
		color: "black",
		fontSize: 30
	},
	button: {
	    backgroundColor: '#000',
	    borderRadius: 25, 
	    paddingVertical: 12,
	    paddingHorizontal: 30,
	    elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.6,
		shadowRadius: 3.84,  
	  },
  	buttonText: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
  	},
});
