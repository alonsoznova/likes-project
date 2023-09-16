let btnArr = document.querySelectorAll('button');
for(let i=0; i<btnArr.length; i++){
    btnArr[i].setAttribute('onclick', 'likeAction('+ i +')');
}
console.log(btnArr);

function likeAction(x){
    let likeQuantity = document.querySelectorAll('span');
    likeQuantity[x].innerText ++;
}