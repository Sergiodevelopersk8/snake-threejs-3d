import { GUIManager } from "../gui.manager";
import { GameState } from "./game.state";
import { MenuState } from "./menu.state";
import { State } from "./state";

export class VictoryState extends State{



public enter(): void{
    
    GUIManager.showHTML('victory','flex');
}


public exit(): void{
    
    GUIManager.hideHTML('victory');
GameState.game.dispose();
MenuState.diorama.start()


}



}