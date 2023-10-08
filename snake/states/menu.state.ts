import { Diorama } from "../shared/diorama";
import { GUIManager } from "../gui.manager";
import { State } from "./state";

export class MenuState extends State{

public static diorama : Diorama


public enter(): void{

GUIManager.menuButtoms();

}


public exit(): void{
    GUIManager.clearButtoms();

}



}