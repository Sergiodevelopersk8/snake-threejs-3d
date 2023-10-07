import { Diorama } from "../classes/diorama";
import { GUIManager } from "../gui.manager";
import { MenuState } from "./menu.state";
import { State } from "./state";

export class GameState extends State{

public static game : GameState


public enter(): void{
MenuState.diorama.dispose();

}


public exit(): void{

}



}