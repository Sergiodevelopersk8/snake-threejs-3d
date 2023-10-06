import { GUIManager } from "../gui.manager";
import { State } from "./state";

export class CreditState extends State{



public enter(): void{
    GUIManager.creditButtoms();
    GUIManager.showHTML('panel');
    
}


public exit(): void{
    
    GUIManager.clearButtoms();
    GUIManager.hideHTML('panel');


}



}