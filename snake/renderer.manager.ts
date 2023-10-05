import { Scene, Vector2, WebGLRenderer } from "three";
import { SceneManager } from "./scene.manager";
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export class RendererManager
{

private static rendere:WebGLRenderer
private static scene:Scene
public static canvas:HTMLCanvasElement
private static composer: EffectComposer

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
RendererManager.postProcessing();
}

private static renderLoop():void{
    requestAnimationFrame(RendererManager.renderLoop);
    RendererManager.rendere.render(SceneManager.scene,SceneManager.camera);
    RendererManager.composer.render();
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

private static postProcessing(): void{
    const width = window.innerWidth;
    const height = window.innerHeight;
    const rendereScene = new RenderPass(SceneManager.scene, SceneManager.camera);
    const bloomPass = new UnrealBloomPass(new Vector2(width, height), 1.5, 0.4,0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1;
    bloomPass.radius = 0;
    bloomPass.renderToScreen = true;
RendererManager.composer = new EffectComposer(RendererManager.rendere);
RendererManager.composer.setSize(width,height);
RendererManager.composer.addPass(rendereScene);
RendererManager.composer.addPass(bloomPass);
RendererManager.rendere.toneMappingExposure = Math.pow(0.9,4.0);



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