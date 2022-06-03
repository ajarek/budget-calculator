import { Modal } from "./class-modal.js";

let arr:{name:string,amount:number}[]=[{name:'Cat',amount:200},{name:'Dog',amount:300},{name:'Bird',amount:400}];


const body=document.querySelector('body') as HTMLBodyElement;
const container=document.querySelector('.container') as HTMLDivElement;
const addExpense=document.querySelector('#add-expense') as HTMLButtonElement;
const expensesList = document.querySelector('.expenses-list') as HTMLDivElement;

class Item{
    constructor(){
    
    }
    render(){
        arr.forEach(element => {
        const item=document.createElement('div');
        item.classList.add('expense');
        
        item.innerHTML=`<div>${element.name}<button><i class="fas fa-caret-down"></i></button></div>
        <div class="action"><i class="fas fa-pen"></i><i class="fas fa-trash"></i></div>`
        expensesList.appendChild(item);
        
        return item
        });
    }
}
const item=new Item();
item.render();


function createModal(){
   container.style.display='none';
    body.style.backgroundColor='#222222';
    const modal=new Modal();
    const modalElement=modal.render();
    body.append(modalElement);
    modalElement.addEventListener('click',(e:any)=>{
        if(e.target.classList.contains('close')){
            modalElement.remove();
        }
    })
    
};

addExpense.addEventListener('click',createModal);