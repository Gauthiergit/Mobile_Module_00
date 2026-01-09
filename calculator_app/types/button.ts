import { Colors } from "../constants/Colors";

export interface ButtonType {
	title: string,
	type: string,
	color: keyof typeof Colors
}