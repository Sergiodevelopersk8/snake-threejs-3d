import { Scene, WebGLRenderer } from "three";
import { SceneManager } from "./scene.manager";

export class RendererManager
{

private static rendere:WebGLRenderer
private static scene:Scene
public static canvas:HTMLCanvasElement


private  constructor(){
console.log('ejecutado instancia');
    SceneManager.init();   
RendererManager.init();
window.addEventListener('resize', RendererManager.resize);
RendererManager.renderLoop();
    }

private static init():void{
    RendererManager.getCanvas();
RendererManager.createRenderer();
}

private static getCanvas(): void{
    RendererManager.canvas = document.getElementById('game') as HTMLCanvasElement;
}

private static createRenderer(): void{
    RendererManager.rendere = new WebGLRenderer({antialias:true, canvas:RendererManager.canvas});
RendererManager.rendere.setPixelRatio(window.devicePixelRatio);
RendererManager.rendere.setSize(window.innerWidth, window.innerHeight);
RendererManager.rendere.toneMappingExposure = 2;

}


private static renderLoop():void{
    requestAnimationFrame(RendererManager.renderLoop);
    RendererManager.rendere.render(SceneManager.scene,SceneManager.camera);
}

private static resize():void{

const width = window.innerWidth;
const height = window.innerHeight;
SceneManager.camera.aspect =  width / height;
SceneManager.camera.updateProjectionMatrix();
RendererManager.rendere.setSize(width, height);
RendererManager.rendere.setPixelRatio(2);

    
}

public static startGame(): void{
    if(!RendererManager.rendere){
        new RendererManager();
    }
}


}