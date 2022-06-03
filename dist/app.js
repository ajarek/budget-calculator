import { Modal } from "./class-modal.js";
let arr = [{ name: 'Cat', amount: 200 }, { name: 'Dog', amount: 300 }, { name: 'Bird', amount: 400 }];
const body = document.querySelector('body');
const container = document.querySelector('.container');
const addExpense = document.querySelector('#add-expense');
const expensesList = document.querySelector('.expenses-list');
class Item {
    constructor() {
    }
    render() {
        arr.forEach(element => {
            const item = document.createElement('div');
            item.classList.add('expense');
            item.innerHTML = `<div>${element.name}<button><i class="fas fa-caret-down"></i></button></div>
        <div class="action"><i class="fas fa-pen"></i><i class="fas fa-trash"></i></div>`;
            expensesList.appendChild(item);
            return item;
        });
    }
}
const item = new Item();
item.render();
function createModal() {
    container.style.display = 'none';
    body.style.backgroundColor = '#222222';
    const modal = new Modal();
    const modalElement = modal.render();
    body.append(modalElement);
    modalElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            modalElement.remove();
        }
    });
}
;
addExpense.addEventListener('click', createModal);
