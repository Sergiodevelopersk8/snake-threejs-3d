import { Color, GridHelper } from "three";
import { LifeCycle } from "../types/helpers";
import { SceneManager } from "../scene.manager";

export class Ground implements LifeCycle{

public static size: number = 15

private division: number = 15
public grid :GridHelper

constructor(){
    this.start();
}

    public start():void{

const color =  new Color(0.1,0.1,0.1);
this.grid = new GridHelper(Ground.size, this.division, color, color );
this.grid.position.set(0,-0.5,0 );
SceneManager.scene.add(this.grid);

    }



public dispose():void{
this.grid.dispose();
SceneManager.scene.remove(this.grid);
}






} 