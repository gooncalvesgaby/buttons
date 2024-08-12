import { createGlobalStyle } from "styled-components"
import Button from "./Components/Buttons/button.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
function App() {


  return (
    <>
    <GlobalStyle/>
    <Button/>
    </>
  )
}

export default App
