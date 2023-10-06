import { Component, ReactNode } from "react";

export default class Panel extends Component{

public render(): ReactNode{



    return(
    
    <div id="panel">
        <h3 id="title">Creditos</h3>
        <div className="text">
            <p>Creado por Sergio Merino Cortez</p>
            <p>basado en babylon.js/SpacePirates pero realizado en threejs</p>
        </div>
        <img src="/ui/textPanel.png" alt=""  />
    </div>
    
    
    )



}




}