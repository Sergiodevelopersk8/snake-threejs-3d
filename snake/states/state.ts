export abstract class State{

public static currentState: State | null = null

public static setCurrent(newState: State): void{
if(this.currentState === newState) return;
if(this.currentState) State.currentState.exit();
this.currentState = newState
State.currentState.enter();
}


public abstract enter(): void


public abstract exit(): void


}