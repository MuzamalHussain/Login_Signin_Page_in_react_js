import React, { useState } from "react";
import Login from './JsFiles/login'
import Sigup from './JsFiles/singup'
import "../Component/CssFiles/Main.css"
import { useEffect } from "react";



function Main() {

  const [Changer, setChanger] = useState('')
  const ChangeSignUpTrigger = () => {
    setChanger(
      <Sigup ChangeLoginTrigger={ChangeLoginTrigger} />
    )
  }
  const ChangeLoginTrigger = () => {
    setChanger(
      <Login ChangeSignUpTrigger={ChangeSignUpTrigger} />
    )
  }
  useEffect(() => {
    setChanger(
      <Login ChangeSignUpTrigger={ChangeSignUpTrigger} />
    )
  }, [])
  return (

    <div id="MainLogin">
      {
        Changer
      }
    </div>

  )
}

export default Main