import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { evaluate } from 'mathjs';
import { ButtonType } from "../types/button";
import { ThemedText } from "../components/ThemedText";
import { Styles } from "../constants/Styles";

export default function Index() {

	const [calcul, setCalcul] = useState("0");
	const [result, setResult] = useState(0);

	const buttons: ButtonType[] = [
		{ title: "7", type: "number", color: "black"},
		{ title: "8", type: "number", color: "black"},
		{ title: "9", type: "number", color: "black"},
		{ title: "C", type: "remover", color: "red_tomato"},
		{ title: "AC", type: "remover", color: "red_tomato"},
		{ title: "4", type: "number", color: "black"},
		{ title: "5", type: "number", color: "black"},
		{ title: "6", type: "number", color: "black"},
		{ title: "+", type: "operator", color: "white"},
		{ title: "-", type: "operator", color: "white"},
		{ title: "1", type: "number", color: "black"},
		{ title: "2", type: "number", color: "black"},
		{ title: "3", type: "number", color: "black"},
		{ title: "x", type: "operator", color: "white"},
		{ title: "/", type: "operator", color: "white"},
		{ title: "0", type: "number", color: "black"},
		{ title: ".", type: "number", color: "black"},
		{ title: "00", type: "number", color: "black"},
		{ title: "=", type: "operator", color: "white"},
	];

	const handleRemover = (buttonTitle: string) => {
		if (buttonTitle == "AC")
		{
			setCalcul("0");
			setResult(0);
		}
		else {
			if (calcul.length > 0)
				setCalcul(prev => prev.slice(0, -1));
			if (calcul.length <= 1)
				setCalcul("0");
		}
	}

	const handleResult = () => {
		if (!isOperator(calcul.slice(-1)))
			setResult(evaluate(calcul.replaceAll("x", "*")));
	}

	const handleUniqueOperator = (buttonTitle: string) => {
		calcul === "-" ? setCalcul("0") : setCalcul(calcul.slice(0, -1) + buttonTitle);
	}

	const isOperator = (item: string): boolean => {
		const operators = "+-/x";
		return operators.includes(item);
	}

	const handleOthersOperators = (buttonTitle: string) => {
		if (isOperator(calcul.slice(-1)))
			handleUniqueOperator(buttonTitle);
		else{
			if (buttonTitle === "-")
				calcul === "0" ? setCalcul(buttonTitle) : setCalcul(prev => prev + buttonTitle);
			else
				setCalcul(prev => prev + buttonTitle);
		}
	}

	const handleOperator = (buttonTitle: string) => {
		buttonTitle === "=" ? handleResult() : handleOthersOperators(buttonTitle);
	}

	const handleCalcul = (button: ButtonType) => {
		switch (button.type) {
			case "remover":
				handleRemover(button.title);
				break;
			case "operator":
				handleOperator(button.title);
				break;
			default:
				calcul === "0" ? setCalcul(button.title) : setCalcul(prev => prev + button.title);
				break;
		}
	}

	return (
		<View style={Styles.container}>
			<View style={Styles.headline}>
				<ThemedText variant="title" color="white">Calculator</ThemedText>
			</View>
			<View style={Styles.displayZone}>
				<ThemedText variant="title" color="white">{calcul}</ThemedText>
				<ThemedText variant="title" color="white">{result}</ThemedText>
			</View>
			<View style={Styles.calculeZone}>
				{buttons.map(button => (
					<TouchableOpacity
						key={button.title}
						style={Styles.button}
						onPress={() => handleCalcul(button)}
					>
						<ThemedText variant="buttonText" color={button.color}>{button.title}</ThemedText>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}
