import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial,Color } from "three";
import { Directions, LifeCycle } from "../types/helpers";
import { SceneManager } from "../scene.manager";
import { InputManager } from "../input/keyboard";

export class Snake implements LifeCycle{

public head: Mesh
private geometry: BoxGeometry
private material: MeshStandardMaterial
public  x: number = 0 
public  z: number = 0
public tail : Array<Mesh> = [] ;
private InputManager:InputManager
private time: number = 0;
private cycle: number = 0.2;
public static direction:  Directions = Directions.right;

constructor(){
    this.start();
}



    public start():void{

this.InputManager = new InputManager();        
this.geometry = new BoxGeometry(1,1,1);
this.material = new MeshStandardMaterial({
    color: new Color(0,0,1),
    //el emissive es elque parece neon 
    // emissive: new Color(0,0,1),
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

public grow(): void{
for(let i = 0; i < 5; i++ ){
    const geometry = new BoxGeometry(1,1,1);
    const tail = new Mesh(geometry, this.material);
    tail.position.set(100,100,100);
    SceneManager.scene.add(tail);
    this.tail.push(tail);
}
}





private updatePosition(): void{
   if(this.tail.length > 0){
    this.tail[0].position.set(this.x,0,this.z);
    for(let i = this.tail.length - 1; i >= 1; i-- ){
    const prev = this.tail[i - 1];
    this.tail[i].position.set(prev.position.x,0,prev.position.z);
    
    }

} 
if(this.InputManager.input === Directions.up) {
Snake.direction = Directions.up;
    this.z +=1

}
if(this.InputManager.input === Directions.down) {
    Snake.direction = Directions.down;
    this.z -=1
}
if(this.InputManager.input === Directions.left) {
    Snake.direction = Directions.left;
    this.x +=1
}
if(this.InputManager.input === Directions.right) {
    Snake.direction = Directions.right;
    this.x -=1
}
this.head.position.set(this.x, 0, this.z);
}


public dispose():void{
    for(const tail of this.tail ){
tail.geometry.dispose();
SceneManager.scene.remove(tail);

    }
this.geometry.dispose();
this.material.dispose();
SceneManager.scene.remove(this.head);
this.InputManager.dispose();
}






} 