import React, {useState} from "react";
import { View } from "react-native"

export const NotaContext = React.createContext()

export const NotasProvider = ({ children }) => {

const [ objBoletim, setObjBoletim ] = React.useState([])
const [colors, setColor ] = React.useState()

const boletim = (nome, n1, n2, n3, n4) => {
    let  nota1 = Number(n1)
    let  nota2 = Number(n2)
    let  nota3 = Number(n3)
    let  nota4 = Number(n4)
    const media = (nota1 + nota2 + nota3 + nota4) / 4

    const obj = {
            "name":  nome,
            "nota1": nota1,
            "nota2": nota2,
            "nota3": nota3,
            "nota4": nota4,
            "media": media
    }
    setObjBoletim([...objBoletim, obj])
  }
  const cor = (nota) =>{
    if(nota > 5)
    return '#00ff00'
    else return '#ff0000'
  }

  return(
    <NotaContext.Provider value={{objBoletim, cor, boletim}} >
        { children }
    </NotaContext.Provider>
  )
}