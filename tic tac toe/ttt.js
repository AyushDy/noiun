const bgImg= new Image();
bgImg.src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88cd4e06-e4dc-45bb-90b6-a7146f058af1/d990b3s-9b2063bb-0892-4024-8518-87b768c266c2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4Y2Q0ZTA2LWU0ZGMtNDViYi05MGI2LWE3MTQ2ZjA1OGFmMVwvZDk5MGIzcy05YjIwNjNiYi0wODkyLTQwMjQtODUxOC04N2I3NjhjMjY2YzIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.t1GNuMcj65Rz1ZLo-maw__H0mikzLa3yl_v5By67jCI";

bgImg.onload= function(){
    document.body.style.backgroundImage= `url(${bgImg.src})`;
}

const boxes= document.querySelectorAll('.box');
const mainbox=document.querySelector('.main');
const mainContent= mainbox.innerHTML;
const playButton= document.querySelector('.play-button');
const playdiv= document.querySelector('.play');
const restart= document.createElement('button');
const gameOverDiv=document.querySelector('over');
restart.innerHTML='Restart';
let flag=true;

const arr=['','','','','','','','',''];

function checkCrossed(){
    let conditions=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    for(let item of conditions){
        const[x,y,z]=item;
        if(arr[x]&&arr[x]===arr[y]&&arr[y]===arr[z]){
            mainbox.innerHTML=`${arr[x]} Wins!!`;
            mainbox.appendChild(restart);
        }
        let flag1= true;
        arr.forEach(ele=>{
            if(ele==''){
                flag1=false;
            }
        })
        if(flag1){
            mainbox.innerHTML=`Match Draw!`;
            mainbox.appendChild(restart);
        }

    }
}

    function clickEvent(){
        const box= this;
        const boxText=box.innerHTML;
        const index= Array.from(boxes).indexOf(box);
        if(flag&&boxText==''){
            box.innerHTML="&#215;";
            arr[index]=box.innerHTML;
            flag=false;
        }
        else if(boxText==''){
            box.innerHTML='&#8728;';
            arr[index]=box.innerHTML;
            flag=true;
        }

        checkCrossed();
    }

    boxes.forEach(box=>{box.addEventListener('click',clickEvent)});


restart.addEventListener('click',()=>{
    mainbox.innerHTML='';
    boxes.forEach(box=>{
        box.innerHTML='';
        mainbox.appendChild(box);
        box.addEventListener('click',clickEvent);
    })
    flag=true;
    arr.fill('');
})

playButton.addEventListener('click',()=>{
    playdiv.style.display='none';
    mainbox.style.display='flex';
    document.querySelector('.head').style.display='none';
})

function won(){
    boxes.forEach.innerHTML='';
}
