class Input
{
public up: boolean = false;
public down: boolean = false;
public left: boolean = false;
public right: boolean = false;
}


export class InputManager
{
public input: Input = new Input;


constructor()
{
    this.handleKey = this.handleKey.bind(this);
document.addEventListener('keydown', this.handleKey)
}

private handleKey(e: KeyboardEvent): void{



switch (e.key) {
    case 'w':
    this.input.up = true;
    this.input.down = false;
    this.input.left = false;
    this.input.right = false;  
        break;

    case 's':
        this.input.up = false;
        this.input.down = true;
        this.input.left = false;
        this.input.right = false;  
    break;

    case 'a':
    this.input.up = false;
    this.input.down = false;
    this.input.left = true;
    this.input.right = false;  
        break;
    case 'd':
    this.input.up = false;
    this.input.down = false;
    this.input.left = false;
    this.input.right = true;  
        break;
   

    
}
}

public dispose(): void
{
document.removeEventListener('keydown', this.handleKey);
}


}