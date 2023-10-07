import { CreditState} from "./credit.state"
import { GameState } from "./game.state"
import { MenuState} from "./menu.state"


export class States{
    public static menu = new MenuState
    public static credit = new CreditState
    public static game = new GameState

}