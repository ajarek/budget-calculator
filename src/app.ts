import { Modal } from "./class-modal.js";

let arr: { name: string; amount: string }[] = [];
const body = document.querySelector("body") as HTMLBodyElement;
const container = document.querySelector(".container") as HTMLDivElement;
const addExpense = document.querySelector("#add-expense") as HTMLButtonElement;
const expensesList = document.querySelector(".expenses-list") as HTMLDivElement;
const btnClear=document.querySelector(".clear-expenses>button") as HTMLButtonElement;
const totalExpense = document.querySelector(".total>span") as HTMLDivElement;


class Item {
  constructor() {
    this.render();
    this.deleteItem();
    this.clearAll();
    this.totalAmount();
  }

  render() {
    expensesList.innerHTML = "";
    if (localStorage.getItem("expense") != null) {
      arr = JSON.parse(localStorage.getItem("expense") || "") || [];
    }

    arr.forEach((element) => {
      const item = document.createElement("div");
      item.classList.add("expense");

      item.innerHTML = `<div>${element.name}<button><i class="fas fa-caret-down"></i></button></div>
        <div class="action"><i class="fas fa-pen"></i><i class="fas fa-trash"></i></div>`;
      expensesList.appendChild(item);
      this.deleteItem();
      return item;
    });
  }

  deleteItem() {
    const items = document.querySelectorAll(
      ".fa-trash"
    ) as NodeListOf<HTMLElement>;
    items.forEach((element, index) => {
      element.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("fa-trash")) {
          arr.splice(index, 1);
          localStorage.setItem("expense", JSON.stringify(arr));
          this.render();
          this.totalAmount();
        }
      });
    });
  }

clearAll(){
    btnClear.addEventListener("click",()=>{
        arr=[];
  localStorage.clear();
 
  this.render();
  totalExpense.innerHTML=`<i class="fas fa-dollar-sign"></i> 0`;
    })
}

totalAmount(){
    totalExpense.innerHTML=`<i class="fas fa-dollar-sign"></i> ${arr.reduce((acc,curr)=>{
        return acc+parseInt(curr.amount)
    },0)}`;
    this.render();
}

}
function createModal() {
  container.style.display = "none";
  body.style.backgroundColor = "#222222";
  const modal = new Modal();
  const modalElement = modal.render();
  modalElement.children[2].addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      const name = (modalElement.children[2].children[1] as HTMLInputElement)
        .value;
      const amount = (modalElement.children[2].children[3] as HTMLInputElement)
        .value;
      const expense = { name, amount };

      arr.push(expense);
      localStorage.setItem("expense", JSON.stringify(arr));
      modalElement.remove();
      container.style.display = "flex";
      body.style.backgroundColor = "#fff";
      item.render();
      item.totalAmount();
    },
    false
  );

  body.append(modalElement);
  modalElement.addEventListener("click", (e: any) => {
    if (e.target.classList.contains("close")) {
      modalElement.remove();
    }
  });
}

addExpense.addEventListener("click", createModal);
const item = new Item();

item.render();
