import { Clock, Vector3 } from "three";
import { LifeCycle } from "../types/helpers";
import { Food } from "./food";
import { Ground } from "./ground";
import { Snake } from "./snake";
import { SceneManager } from "../scene.manager";

export class Diorama implements LifeCycle{

private snake: Snake
private food: Food
private ground: Ground
private stop: boolean = false
private clock: Clock = new Clock()
private time: number = 0
private distance: number = 20



public start():void{

 this.stop = false;       
this.snake = new Snake();
this.food = new Food();
this.ground = new Ground();
this.update();
    }

public update():void{

if(this.stop) return

requestAnimationFrame(this.update.bind(this))
const  delta = this.clock.getDelta();
this.time += delta;
this.rotateCamera();
}


private rotateCamera(): void{

const offset = new Vector3()
offset.x= this.distance * Math.sin(this.time * 0.1)
offset.y = 5
offset.z= this.distance * Math.cos(this.time * 0.1)
SceneManager.camera.position.copy(offset)
SceneManager.camera.lookAt(new Vector3 (0,0,0))
}



public dispose():void{

this.stop = true;

this.snake.dispose();
this.food.dispose();
}






} 