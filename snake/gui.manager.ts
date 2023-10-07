import { State } from "./states/state";
import { States } from "./states/states";

export class GUIManager 
{
public static menuButtoms(): void{
    const menu = document.getElementById('menu');
    const credit = document.createElement('button');
    credit.className = 'button';
    credit.innerHTML = 'CREDITOS';
    credit.onclick = () => State.setCurrent(States.credit);
    menu.appendChild(credit);

    const game = document.createElement('button');
    game.className = 'button';
    game.innerHTML = 'JUGAR';
    game.onclick = () => State.setCurrent(States.game);
    menu.appendChild(game);

}


public static creditButtoms(): void{
    const menu = document.getElementById('menu');
    const back = document.createElement('button');
    back.className = 'button';
    back.innerHTML = 'ATRAS';
    back.onclick = () => State.setCurrent(States.menu);
    menu.appendChild(back);



}
public static clearButtoms(): void{
    const menu = document.getElementById('menu');
    menu.textContent = '';
}

 public static showHTML(id:string, style = 'block'):void{

const element = document.getElementById(id); 
element.style.display =style;
}


public static hideHTML(id:string, style = 'none'):void{
    const element = document.getElementById(id); 
    element.style.display =style;

 }   


}