

var cards = document.getElementsByClassName("card");
for (var i = 0; i<cards.length;i++){
    var likebtn = cards[i].getElementsByClassName("imag")[0];
  
    likebtn.addEventListener("click", likedislike);

    var minus_btn= cards[i].getElementsByClassName("minus")[0];
    minus_btn.addEventListener("click",decrement)

    var plus_btn= cards[i].getElementsByClassName("plus")[0];
    plus_btn.addEventListener("click",increment)

 

    var deletes_btn= cards[i].getElementsByClassName("btn btn-danger")[0];
    // deletes_btn.addEventListener("click",remove)
    }
function likedislike(event){
    var button = event.target;
    if (button.getAttribute("src") == "love.png"){
    button.setAttribute("src","lovee.png");}
    else {
        button.setAttribute("src","love.png");
    }
}
function decrement(event){
    var btn = event.target;
    
    var qte = document.getElementsByClassName("qty")[event.target.id];
    
    if (qte.value <=0 ){
        qte.value =0;
    }else{
    qte.value--;}
}
function increment(event){
    var sum=0
    var prix = document.getElementsByClassName("price")[event.target.id].innerHTML
    var qte1 =document.getElementsByClassName("qty")[event.target.id]
    var qte = document.getElementsByClassName("qty")[event.target.id].value
    if (qte1.value >=0 ){
    qte1.value++;}
    sum=sum+(prix*qte)
    console.log(prix,qte)
var tot= document.getElementsByClassName("tot")[event.target.id].setAttribute("value",`${sum}`)
}
function somme(){
prix = document.getElementById("price").innerHTML;

// Qty = document.getElementsByClassName("qty")[event.target.id].value;
console.log(event)

// sum = prix * Qty;
// console.log(sum)
// document.getElementsByClassName("tot").innerHTML = sum;
// }
// function remove()
// var del = document.getElementsByClassName("dele").remove;
// console.log(del)

}
  