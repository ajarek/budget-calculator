export class Modal {
    constructor() { }
    render() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        const title = document.createElement('h2');
        title.textContent = 'Add Expense';
        const close = document.createElement('button');
        close.innerHTML = `<i class="fas fa-times"></i>`;
        close.classList.add('close');
        close.addEventListener('click', () => {
            modal.remove();
            document.body.style.backgroundColor = '#ececec';
            const container = document.querySelector('.container');
            container.style.display = 'flex';
        });
        const form = document.createElement('form');
        form.classList.add('form');
        const label = document.createElement('label');
        label.textContent = 'Name';
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'name';
        input.setAttribute('required', '');
        const label2 = document.createElement('label');
        label2.textContent = 'Amount';
        const input2 = document.createElement('input');
        input2.type = 'number';
        input2.id = 'amount';
        input2.setAttribute('required', '');
        const submit = document.createElement('button');
        submit.textContent = 'Add Expense';
        submit.type = 'submit';
        form.append(label, input, label2, input2, submit);
        modal.append(title, close, form);
        return modal;
    }
}
