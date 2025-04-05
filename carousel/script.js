//let arr=["c1.png","c2.png","c3.png","c4.jpg"];
let i=0;
let leftbtn=document.getElementById("left");
let rightbtn=document.getElementById("right");
let track=document.getElementById("track");
function slide(){
    track.style.transform="translateX(-"+i*300+"px)";

}
if(leftbtn){
    leftbtn.addEventListener("click",function(){
        i--;
        if(i<0){
            i = 3;
        }
        slide();
    });
}
if(rightbtn){
    rightbtn.addEventListener("click",function(){
        i++;
        if(i>3){
            i=0;
        }
        slide();
    });
}