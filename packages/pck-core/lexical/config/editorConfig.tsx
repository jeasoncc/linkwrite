import { exampleTheme } from "./theme";

export const editorConfig = {
	namespace: "React.js Demo",
	nodes: [],
	// Handling of errors during update
	onError(error: Error) {
		throw error;
	},
	// The editor theme
	theme: exampleTheme,
};
