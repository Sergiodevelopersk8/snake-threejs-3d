import { GUIManager } from "../gui.manager";
import { State } from "./state";

export class CreditState extends State{



public enter(): void{
    GUIManager.creditButtoms();

}


public exit(): void{

    GUIManager.clearButtoms();


}



}