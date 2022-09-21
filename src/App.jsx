import { ButtonMenu } from "./components"
import { ModalMenu } from "./components/ModalMenu"
import { Home } from "./Home"
import { ThemeProvider } from "@material-tailwind/react";
import { DesktopMenu } from "./components/DesktopMenu";
 

function App() {
  return (
    <ThemeProvider>
      <main>
        <ButtonMenu />
        <ModalMenu />
        <DesktopMenu />
        <Home />
      </main>
    </ThemeProvider>
  )
}

export default App
