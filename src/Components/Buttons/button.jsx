import * as S from "./buttonStyle.jsx"
import { useState } from "react"

function Button() {

    const[mensagem, setMensagem] = useState('clique aqui para')
    const[mensagem2, setMensagem2] = useState('entender melhor')
    const[mensagem3, setMensagem3] = useState('o que eu sou')
    

    return(
        <S.Div>
            <S.Button
             onClick={() => {
                setMensagem('eu sou')
             }}>
                {mensagem} 
            </S.Button>

            <S.Button
            onClick={() => {
                setMensagem2('um hook')
            }}>
                {mensagem2}
            </S.Button>

            <S.Button onClick={() => {
                setMensagem3('useState')
            }}>
                {mensagem3}
            </S.Button>
        </S.Div>
    )
}

export default Button