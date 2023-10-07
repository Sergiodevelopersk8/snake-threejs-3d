import { Diorama } from "../classes/diorama";
import {Game} from '../classes/game'
import { GUIManager } from "../gui.manager";
import { MenuState } from "./menu.state";
import { State } from "./state";
export class GameState extends State{

public static game : Game


public enter(): void{
MenuState.diorama.dispose();
GameState.game.start();
}


public exit(): void{

}



}