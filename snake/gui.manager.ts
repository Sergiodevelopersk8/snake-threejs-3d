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

    


}