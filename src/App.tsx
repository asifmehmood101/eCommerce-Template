import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#46760A",
        },
    },
});

//test
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div
                className="app"
                style={{
                    backgroundColor: "transparent",
                }}
            >
                <h1>Hello world</h1>
            </div>
        </ThemeProvider>
    );
}

export default App;
