import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial,Color } from "three";
import { LifeCycle } from "../types/helpers";
import { SceneManager } from "../scene.manager";
import { InputManager } from "../input/keyboard";

export class Snake implements LifeCycle{

private head: Mesh
private geometry: BoxGeometry
private material: MeshStandardMaterial
private x: number = 0 
private z: number = 0
private tail : Array<Mesh> = [] ;
private InputManager:InputManager
private time: number = 0;
private cycle: number = 1;

constructor(){
    this.start();
}



    public start():void{

this.InputManager = new InputManager();        
this.geometry = new BoxGeometry(1,1,1);
this.material = new MeshStandardMaterial({
    color: new Color(0,0,1),
    emissive: new Color(0,0,1),
    metalness:0.5,
    roughness:0.55,
})

this.head = new Mesh(this.geometry, this.material);
this.head.position.set(this.x, 0, this.z);
SceneManager.scene.add(this.head)

    }

public update(deltaTime):void{

this.time += deltaTime;
if(this.cycle < this.time){
    this.updatePosition();
    this.time = 0;
}


}
private updatePosition(): void{
if(this.InputManager.input.up) this.z +=1
if(this.InputManager.input.down) this.z -=1
if(this.InputManager.input.left) this.x +=1
if(this.InputManager.input.right) this.x -=1
this.head.position.set(this.x, 0, this.z);
}


public dispose():void{
this.geometry.dispose();
this.material.dispose();
SceneManager.scene.remove(this.head);
this.InputManager.dispose();
}






} 