import { Home } from "./Home";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider>
      <main>
        <Home />
      </main>
    </ThemeProvider>
  );
}

export default App;
