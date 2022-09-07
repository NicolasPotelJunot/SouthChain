import { ButtonMenu } from "./components"
import { ModalMenu } from "./components/ModalMenu"
import { Home } from "./Home"
import { ThemeProvider } from "@material-tailwind/react";
 

function App() {
  return (
    <ThemeProvider>
      <main>
        <ModalMenu />
        <ButtonMenu />
        <Home />
      </main>
    </ThemeProvider>
  )
}

export default App
