import { Directions } from "../types/helpers";
import {Snake } from "../shared/snake";



export class InputManager
{
// public input: Input = new Input;
// public input: Directions = Directions.right;
public input: Directions;

constructor()
{
    this.handleKey = this.handleKey.bind(this);
document.addEventListener('keydown', this.handleKey)
}

private handleKey(e: KeyboardEvent): void{

console.log(e.key);

switch (e.key) {
    case 'ArrowUp':
        if(Snake.direction !== Directions.down)this.input = Directions.up ;
        break;
        
        case 'ArrowDown':
            
            if(Snake.direction !== Directions.up)this.input = Directions.down ;
            break;
            
        
        case 'ArrowLeft':
        if(Snake.direction !== Directions.right)this.input = Directions.left;
        break;
    
        case 'ArrowRight':
        if(Snake.direction !== Directions.left)this.input = Directions.right;
        break;
   

    
}
}

public dispose(): void
{
document.removeEventListener('keydown', this.handleKey);
}


}