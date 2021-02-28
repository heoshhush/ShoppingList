const inputText = document.querySelector('.input-text');
const list = document.querySelector('.list');
const shoppingForm = document.querySelector('.shopping-form');
const inputButton = document.querySelector('.input-button');

function userInput(event){
    event.preventDefault();
    const value = inputText.value;

    //li 만들기
    const li = document.createElement('li');
    li.setAttribute('class','li');
    const item = document.createElement('span');
    item.setAttribute('class','item');
    item.innerText = value;

    //삭제 버튼 만들기

    const delBtn = document.createElement('button');
    delBtn.innerText = '✖';

    //li와 삭제버튼 삽입하기
    li.appendChild(item);
    li.append(delBtn);
    list.appendChild(li);

    //style 조정하기
    
    // span은 inline element라, width를 조절할 수 없음. 그래서 
    // inline-block element로 만들어준다!!!

    // input type = text의 칸이 입력시 비워지도록 함
    inputText.value ='';

    // 삭제 버튼 클릭시 해당 list 삭제 되도록 함
    delBtn.addEventListener('click',() => {
        li.classList.add('invisible');
    });
}

function init(){
shoppingForm.addEventListener('submit', event => userInput(event));
inputButton.addEventListener('click', event => userInput(event));
}

init();