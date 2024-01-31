const pages= document.querySelectorAll('.page');
const boxes = document.querySelectorAll('.box');
const leftShift= document.querySelector('.left');
const rightShift= document.querySelector('.right');
const page1 = document.querySelector('#box1');
const page2 = document.querySelector('#box2');
const page3 = document.querySelector('#box3');
const page4 = document.querySelector('#box4');
const page5 = document.querySelector('#box5');
const page6 = document.querySelector('#box6');
const page7 = document.querySelector('#box7');
const page8 = document.querySelector('#box8');
const page9 = document.querySelector('#box9');
const page10 = document.querySelector('#box10');

let pageNo=1;

pageDisplay(pageNo);

leftShift.addEventListener('click',function(){
    if(pageNo>1){
        pageNo--;
        pageDisplay(pageNo);
    }
})

rightShift.addEventListener('click',function(){
    if(pageNo<10){
        pageNo++;
        pageDisplay(pageNo);
    }        
})

page1.addEventListener('click',function(){
    pageDisplay(1);
});

page2.addEventListener('click',function(){
    pageDisplay(2);
})

page3.addEventListener('click',function(){
    pageDisplay(3);
})

page4.addEventListener('click',function(){
    pageDisplay(4);
})

page5.addEventListener('click',function(){
    pageDisplay(5);
})

page6.addEventListener('click',function(){
    pageDisplay(6);
})
page7.addEventListener('click',function(){
    pageDisplay(7);
})

page8.addEventListener('click',function(){
    pageDisplay(8);
})

page9.addEventListener('click',function(){
    pageDisplay(9);
})

page10.addEventListener('click',function(){
    pageDisplay(10);
})


function pageDisplay(page){
    for(let i=0;i<10;i++){
    pages[i].style.display='none';
    boxes[i].style.display='none';
}
 pages[page-1].style.display='';
 leftShift.classList.remove('gray');
 rightShift.classList.remove('gray');
 
 if(page<=5&&page!=1){
    boxes[page-2].style.display='';
    boxes[page-1].style.display='';

    boxes[8].style.display='';
    boxes[9].style.display='';
 }
 if(page>=6&&page!=10){
    boxes[page].style.display='';
    boxes[page-1].style.display='';

    boxes[0].style.display='';
    boxes[1].style.display='';
 }
 if(page==1){
    boxes[1].style.display='';
    boxes[0].style.display='';

    boxes[8].style.display='';
    boxes[9].style.display='';
    leftShift.classList.add('gray');
 }
 if(page==10){
    boxes[9].style.display='';
    boxes[8].style.display='';

    boxes[1].style.display='';
    boxes[0].style.display='';
    rightShift.classList.add('gray');
 }
 for(let i=0;i<10;i++){
    boxes[i].classList.remove('blue');
 }
 boxes[page-1].classList.add('blue');
}

