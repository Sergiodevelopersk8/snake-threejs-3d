import { Component, ReactNode } from "react";
import { State } from "../states/state";
import { States } from "../states/states";

export default class VctoryScreen extends Component{

public render(): ReactNode{



    return(
    
    <div id="victory">
        <h3 id="victory_title">GANASTE</h3>
        <button  onClick={()=>State.setCurrent(States.menu)} className="button">MENU</button>
        
    </div>
    
    
    )



}




}