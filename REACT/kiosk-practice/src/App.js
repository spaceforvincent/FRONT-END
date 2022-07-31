import {
  ThemeProvider,
  CssBaseline,
  Container,
  Paper,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LendScreen from "./screens/LendScreen";
import RecommendScreen from "./screens/RecommendScreen";
import ReturnScreen from "./screens/ReturnScreen";
import SearchScreen from "./screens/SearchScreen";

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
    palette: {
      primary: { main: "#ff1744" },
      secondary: {
        main: "#118e16",
        contrastText: "#ffffff",
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/rental" element={<LendScreen />} exact></Route>
            <Route path="/return" element={<ReturnScreen />} exact></Route>
            <Route path="/recommend" element={<RecommendScreen />} exact></Route>
            <Route path="/search" element={<SearchScreen />} exact></Route>
            </Routes>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
