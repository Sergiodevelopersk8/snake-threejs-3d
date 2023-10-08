import { GUIManager } from "../gui.manager";
import { GameState } from "./game.state";
import { MenuState } from "./menu.state";
import { State } from "./state";

export class DefeatState extends State{



public enter(): void{
    
    GUIManager.showHTML('defeat','flex');
}


public exit(): void{
    
    GUIManager.hideHTML('defeat');
GameState.game.dispose();
MenuState.diorama.start()


}



}