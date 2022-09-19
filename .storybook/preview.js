import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#6A983C",
            light: "#F4F8EC",
        },
        secondary: {
            main: "#F5F5F5",
        },
    },
});

export const decorators = [(Story) => <MUIThemeProvider theme={theme}>{Story()}</MUIThemeProvider>];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
