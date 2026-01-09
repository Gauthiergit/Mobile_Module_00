import { StyleSheet, Text, TextProps } from "react-native";
import { Colors } from "../constants/Colors";

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold"
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
})

type Props = TextProps & {
	variant?: keyof typeof styles,
	color?: keyof typeof Colors
}

export function ThemedText({ variant, color, ...rest }: Props) {
	return <Text style={[styles[variant], {color: Colors[color] }]} {...rest} />
}