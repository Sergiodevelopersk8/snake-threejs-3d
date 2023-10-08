import { CreditState} from "./credit.state"
import { DefeatState } from "./defeat.state"
import { GameState } from "./game.state"
import { MenuState} from "./menu.state"
import { VictoryState } from "./victory.state"


export class States{
    public static menu = new MenuState
    public static credit = new CreditState
    public static game = new GameState
    public static defeat= new DefeatState
    public static victory = new VictoryState

}