import { ButtonMenu } from "./components"
import { ModalMenu } from "./components/ModalMenu"
import { Home } from "./Home"
import { ThemeProvider } from "@material-tailwind/react";
 

function App() {
  return (
    <ThemeProvider>
      <main>
        <ButtonMenu />
        <ModalMenu />
        <Home />
      </main>
    </ThemeProvider>
  )
}

export default App
