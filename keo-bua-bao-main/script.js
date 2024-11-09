
function randoms(){
    let c= Math.floor(Math.random() * 3) + 1; // Tạo số từ 1 đến 3
    return c;
}

const myDiv2 = document.getElementById("div-2");
const myDiv3 = document.getElementById("div-3");
const myDiv4 = document.getElementById("div-4");


myDiv2.addEventListener('click',()=> {
    let result = randoms();
    let a = document.getElementById("i");
    a.className = ""; // Xóa các class hiện tại
    if (result == 1){
        var keo = document.getElementById("i");
        keo.classList.add("fa-solid", "fa-scissors", "fa-10x"); 
        document.getElementById("win").innerHTML = "Hoà";
        
    }else if(result == 2) {
        var bua = document.getElementById("i");
        bua.classList.add("fa-solid","fa-hammer", "fa-flip-horizontal","fa-10x");
        document.getElementById("win").innerHTML = "Bạn đã thua(loser)" ;
        
    }else{
        var bao = document.getElementById("i");
        bao.classList.add("fa-regular","fa-hand","fa-10x"); 
        document.getElementById("win").innerHTML = "Bạn đã thắng(win)" ;
        
    }
});

myDiv3.addEventListener('click',()=> {
    let result = randoms();
    let a = document.getElementById("i");
    a.className = ""; // Xóa các class hiện tại
    if (result == 1){
        var keo = document.getElementById("i");
        keo.classList.add("fa-solid", "fa-scissors", "fa-10x"); 
        document.getElementById("win").innerHTML = "Bạn đã thắng(win)";
        
    }else if(result == 2) {
        var bua = document.getElementById("i");
        bua.classList.add("fa-solid","fa-hammer", "fa-flip-horizontal","fa-10x");
        document.getElementById("win").innerHTML = "Hoà" ;
        
    }else{
        var bao = document.getElementById("i");
        bao.classList.add("fa-regular","fa-hand","fa-10x"); 
        document.getElementById("win").innerHTML = "Bạn đã thua(loser)" ;
        
    }
});

myDiv4.addEventListener('click',()=> {
    let result = randoms();
    let a = document.getElementById("i");
    a.className = ""; // Xóa các class hiện tại

    if (result == 1){
        var keo = document.getElementById("i");
        keo.classList.add("fa-solid", "fa-scissors", "fa-10x"); 
        document.getElementById("win").innerHTML = "Bạn đã thua(loser)";
        
    }else if(result == 2) {
        var bua = document.getElementById("i");
        bua.classList.add("fa-solid","fa-hammer", "fa-flip-horizontal","fa-10x");
        document.getElementById("win").innerHTML = "Bạn đã thắng(win)" ;
        
    }else{
        var bao = document.getElementById("i");
        bao.classList.add("fa-regular","fa-hand","fa-10x"); 
        document.getElementById("win").innerHTML = "Hoà" ;
        
    }
});

