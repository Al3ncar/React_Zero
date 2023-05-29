import React from "react";
import "./App.css"

import TemplatExp from "./assets/components/2_FUNDAMENTOS/TempleteExpressions"
import MyComponents from "./assets/components/2_FUNDAMENTOS/MyComponents"
import EventClick from "./assets/components/2_FUNDAMENTOS/EventClick";

export default function Aulas (){
  return(
    <div>
      <h1>Conjunto de Aulas do React ao Zero</h1>
      <h2> Sequência de aulas </h2>
      <div>
        <TemplatExp />
        <MyComponents />
        <EventClick />

      </div>
    </div>
  )
}