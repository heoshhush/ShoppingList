const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){

    const text = input.value;
    if(text === ''){
        input.focus();
        return
    }
    console.log(text);

    const item = createItem(text); 
    items.appendChild(item);
    item.scrollIntoView({block: 'center'});
    input.value = '';
    input.focus(); 
}

let id = 0 ;
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');
    itemRow.setAttribute('data-id',id);
    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete" data-id = ${id}>
            <i class="fas fa-trash-alt" data-id = ${id}></i>
        </button>
    </div>
    <div class="item__divider">
    </div>
    `;
    return itemRow;
    i++;
}



addBtn.addEventListener('click', ()=> {
    onAdd();
})

input.addEventListener('keypress',(event)=>{
    if(event.key ==='Enter'){
        onAdd();
    }
})

items.addEventListener('click', (event) => {
    const id  = event.target.dataset.id;
    if(id){
    const toBeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDelete.remove();
}
})
