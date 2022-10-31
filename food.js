 import {foodItem} from "./item.js";



let maddress=document.getElementById("m-add-address");
let address=document.getElementById("add-address");
address.addEventListener("click", addressItem);
maddress.addEventListener("click", addressItem);
function addressItem(){
let addedAdress=prompt("added your address");
if(addedAdress){
  maddress.innerHTML='<i class="fa fa-map-marker  "  ></i>'+addedAdress;
  address.innerHTML='<i class="fa fa-map-marker  "  ></i>'+addedAdress;
}else{
  alert("please inter your address")
}
}

// let todoArray=[];
// function addNewTodo(){
//   let new1={
//     id:todoArray.length+1,
//     name: todoArray.name,
//     category : todoArray.category,
//     rating : todoArray.rating,
//     price: todoArray.price,
//     img:,
//     quantity: 1
//   }
// }


let navBtn=document.querySelector(".nav-btn");
let menumobile=document.querySelector(".menu-mobile");
let flag= true;
navBtn.addEventListener("click" , function(){
  if(flag){
   
    navBtn.classList.add('open');
    menumobile.style.right="0";
    flag=false;
  }else{
navBtn.classList.remove('open');
// menumobile.style.left="-30rem";
menumobile.style.right="-30rem";
flag=true;
  }})

  window.onscroll=()=>{
    menumobile.style.right="-30rem";
    navBtn.classList.remove('open');
  }












let Italian=document.querySelector(".Italian");

let ItalianData=foodItem.filter(item=>item.category =='Italian Food');



ItalianData.forEach(element => {


  let divElem=document.createElement("div")
  divElem.className="product";
  let divElem1=document.createElement("div");
  divElem1.className="product-item";
  let divElem3=document.createElement("div");
  let divElem7=document.createElement("div");
  divElem7.className="star";
  let span=document.createElement("span");
  let iElem=document.createElement("i");
  iElem.className="fa fa-star";
  iElem.setAttribute("id" , "rating");
  span.innerHTML="4.3";
  divElem7.append(iElem);
  divElem7.append(span);
  divElem3.appendChild(divElem7);

  let divElem4=document.createElement("div");
  let iElem1=document.createElement("i");
  // <i class="fa-solid fa-cart-plus"></i>
  iElem1.className="fa-solid fa-cart-plus add-to-cart heart";
  iElem1.setAttribute('id' , element.id);
  iElem1.addEventListener("click" ,function(){
    addtocart(element.id)
   })
  divElem4.appendChild(iElem1);

  divElem1.append(divElem3 , divElem4);

  let divElem5=document.createElement("div")
  divElem5.className="product-picture";
  let imgElem=document.createElement("img");
  imgElem.className="product__img";
  imgElem.setAttribute("src" , element.img);
  divElem5.append(imgElem);
  let pElem=document.createElement("p");
  pElem.className="product-name";
  pElem.innerText=element.name;

  let pElem1=document.createElement("p");
  pElem1.className="product-price";
  pElem1.innerText="price:$" +element.price;
  // let divElem9=document.createElement("div");
  // divElem9.className="product-element";
  // divElem9.append(pElem );
  // divElem9.append(pElem1);
  divElem.append(divElem1 ,divElem5 ,pElem, pElem1);
  Italian.append(divElem)

});



let Mexican =document.querySelector(".Mexican ");

let MexicanData=foodItem.filter(item=>item.category =='Mexican food');

MexicanData.forEach(element => {


  let divElem=document.createElement("div")
  divElem.className="product";
  let divElem1=document.createElement("div");
  divElem1.className="product-item";
  let divElem3=document.createElement("div");
  // let iElem=document.createElement("i");
  // iElem.className="fa fa-star";
  // iElem.setAttribute("id" , "rating");
  // iElem.innerHTML="4.3";
  // divElem3.appendChild(iElem);
  let divElem7=document.createElement("div");
  divElem7.className="star";
  let span=document.createElement("span");
  let iElem=document.createElement("i");
  iElem.className="fa fa-star";
  iElem.setAttribute("id" , "rating");
  span.innerHTML="4.3";
  divElem7.append(iElem);
  divElem7.append(span);
  divElem3.appendChild(divElem7);

  let divElem4=document.createElement("div");
  let iElem1=document.createElement("i");
  iElem1.className="fa-solid fa-cart-plus add-to-cart heart";
  iElem1.setAttribute('id' , element.id);
  iElem1.addEventListener("click" ,function(){
    addtocart(element.id)
   })
  divElem4.appendChild(iElem1);

  divElem1.append(divElem3 , divElem4);

  let divElem5=document.createElement("div")
  divElem5.className="product-picture";
  let imgElem=document.createElement("img");
  imgElem.className="product__img";
  imgElem.setAttribute("src" , element.img);
  divElem5.append(imgElem);
  let pElem=document.createElement("p");
  pElem.className="product-name";
  pElem.innerText=element.name;

  let pElem1=document.createElement("p");
  pElem1.className="product-price";
  pElem1.innerText="price:$" +element.price;
  //  let divElem6=document.createElement("div");
  //  divElem6.className="div";
  //  let span=document.createElement("span");
  //  span.className="price";
  //  span.innerHTML="$40";
   

  //  let span1=document.createElement("span")
  //   span1.innerHTML="$20";
  //   span1.className="price2"
  //  divElem6.appendChild(span ,pElem1);
  divElem.append(divElem1 ,divElem5,pElem  ,pElem1);

  
  Mexican.append(divElem)

});



let Sandwiches=document.querySelector(".Sandwiches");

let SandwichesData=foodItem.filter(item=>item.category =='Sandwiches Food');

SandwichesData.forEach(element => {


  let divElem=document.createElement("div")
  divElem.className="product";
  let divElem1=document.createElement("div");
  divElem1.className="product-item";
  let divElem3=document.createElement("div");
  // let iElem=document.createElement("i");
  // iElem.className="fa fa-star";
  // iElem.setAttribute("id" , "rating");
  // iElem.innerHTML="4.3";
  // divElem3.appendChild(iElem);
  let divElem7=document.createElement("div");
  divElem7.className="star";
  let span=document.createElement("span");
  let iElem=document.createElement("i");
  iElem.className="fa fa-star";
  iElem.setAttribute("id" , "rating");
  span.innerHTML="4.3";
  divElem7.append(iElem);
  divElem7.append(span);
  divElem3.appendChild(divElem7);

  let divElem4=document.createElement("div");
  let iElem1=document.createElement("i");
  iElem1.className="fa-solid fa-cart-plus add-to-cart heart";
  iElem1.setAttribute('id' , element.id);
  iElem1.addEventListener("click" ,function(){
    addtocart(element.id)
   
   })

  divElem4.appendChild(iElem1);

  divElem1.append(divElem3 , divElem4);

  let divElem5=document.createElement("div")
  divElem5.className="product-picture";
  let imgElem=document.createElement("img");
  imgElem.className="product__img";
  imgElem.setAttribute("src" , element.img);
  divElem5.append(imgElem);
  let pElem=document.createElement("p");
  pElem.className="product-name";
  pElem.innerText=element.name;

  let pElem1=document.createElement("p");
  pElem1.className="product-price";
  pElem1.innerText="price:$" +element.price;
  divElem.append(divElem1 ,divElem5  ,pElem, pElem1);
  Sandwiches.append(divElem)

});







let SochiFood=document.querySelector(".Sochi");
let SochiFoodData=foodItem.filter(item=>item.category =='Sochi Food');

SochiFoodData.forEach(element => {


  let divElem=document.createElement("div")
  divElem.className="product";
  let divElem1=document.createElement("div");
  divElem1.className="product-item";
  let divElem3=document.createElement("div");
  // let iElem=document.createElement("i");
  // iElem.className="fa fa-star";
  // iElem.setAttribute("id" , "rating");
  // iElem.innerHTML="4.3";
  // divElem3.appendChild(iElem);
  let divElem7=document.createElement("div");
  divElem7.className="star";
  let span=document.createElement("span");
  let iElem=document.createElement("i");
  iElem.className="fa fa-star";
  iElem.setAttribute("id" , "rating");
  span.innerHTML="4.3";
  divElem7.append(iElem);
  divElem7.append(span);
  divElem3.appendChild(divElem7);

  let divElem4=document.createElement("div");
  let iElem1=document.createElement("i");
  iElem1.className="fa-solid fa-cart-plus add-to-cart heart";
  iElem1.setAttribute('id' , element.id);
  iElem1.addEventListener("click" ,function(){
    addtocart(element.id)
   })
  divElem4.appendChild(iElem1);

  divElem1.append(divElem3 , divElem4);

  let divElem5=document.createElement("div")
  divElem5.className="product-picture";
  let imgElem=document.createElement("img");
  imgElem.className="product__img";
  imgElem.setAttribute("src" , element.img);
  divElem5.append(imgElem);
  let pElem=document.createElement("p");
  pElem.className="product-name";
  pElem.innerText=element.name;

  let pElem1=document.createElement("p");
  pElem1.className="product-price";
  pElem1.innerText="price:$" +element.price;
  divElem.append(divElem1 ,divElem5  ,pElem, pElem1);
  SochiFood.append(divElem)

});






let spain=document.querySelector(".Spain ");
let spainData=foodItem.filter(item=>item.category =='Spain Food');

spainData.forEach(element => {


  let divElem=document.createElement("div")
  divElem.className="product";
  let divElem1=document.createElement("div");
  divElem1.className="product-item";
  let divElem3=document.createElement("div");
  // let iElem=document.createElement("i");
  // iElem.className="fa fa-star";
  // iElem.setAttribute("id" , "rating");
  // iElem.innerHTML="4.3";
  // divElem3.appendChild(iElem);
  let divElem7=document.createElement("div");
  divElem7.className="star";
  let span=document.createElement("span");
  let iElem=document.createElement("i");
  iElem.className="fa fa-star";
  
  iElem.setAttribute("id" , "rating");
  span.innerHTML="4.3";
  divElem7.append(iElem);
  divElem7.append(span);
  divElem3.appendChild(divElem7);

  let divElem4=document.createElement("div");
  let iElem1=document.createElement("i");
  iElem1.className="fa-solid fa-cart-plus add-to-cart heart";
  iElem1.setAttribute('id' , element.id)
  iElem1.addEventListener("click" ,function(){
    addtocart(element.id)
   })
  divElem4.appendChild(iElem1);

  divElem1.append(divElem3 , divElem4);

  let divElem5=document.createElement("div")
  divElem5.className="product-picture";
  let imgElem=document.createElement("img");
  imgElem.className="product__img";
  imgElem.setAttribute("src" , element.img);
  divElem5.append(imgElem);
  let pElem=document.createElement("p");
  pElem.className="product-name";
  pElem.innerText=element.name;

  let pElem1=document.createElement("p");
  pElem1.className="product-price";
  pElem1.innerText="price:$" +element.price;
  divElem.append(divElem1 ,divElem5  ,pElem, pElem1);
  spain.append(divElem)

});








let desserts=document.querySelector(".Desserts");
let dessertsData=foodItem.filter(item=>item.category =='Desserts');

dessertsData.forEach(element => {
  let divElem=document.createElement("div")
  divElem.className="product";
  let divElem1=document.createElement("div");
  divElem1.className="product-item";
  



  let divElem7=document.createElement("div");
  divElem7.className="star";
  let span=document.createElement("span");
  let iElem=document.createElement("i");
  iElem.className="fa fa-star";
  iElem.setAttribute("id" , "rating");
  span.innerHTML="4.3";
  let divElem3=document.createElement("div");
  divElem7.append(iElem);
  divElem7.append(span);
  divElem3.appendChild(divElem7);
  // let iElem=document.createElement("i");
  // iElem.className="fa fa-star";
  // iElem.setAttribute("id" , "rating");
  // iElem.innerHTML="4.3";

  divElem3.appendChild(divElem7);
 
  
  

  let iElem1=document.createElement("i");
  iElem1.className="fa-solid fa-cart-plus add-to-cart heart";
  iElem1.setAttribute('id' , element.id);
   iElem1.addEventListener("click" ,function(){
    addtocart(element.id)
   })



  divElem1.append(divElem3,  iElem1 );

  let divElem5=document.createElement("div")
  divElem5.className="product-picture";
  let imgElem=document.createElement("img");
  imgElem.className="product__img";
  imgElem.setAttribute("src" , element.img);
  imgElem.setAttribute("loading","lasy");
  divElem5.append(imgElem);
  let pElem=document.createElement("p");
  pElem.className="product-name";
  pElem.innerText=element.name;
  let pElem1=document.createElement("p");
  pElem1.className="product-price";
  pElem1.innerText="price:$" +element.price;
  divElem.append(divElem1 ,divElem5  ,pElem, pElem1);
  desserts.append(divElem)});

let cartplus=document.getElementById("cart-plus");
// cartplus.addEventListener('click' , cartincrease);


const vegData=new Map(foodItem.map(item=>[item['category'],item]));
let headerright=document.querySelector(".header-offer");
let mobile=document.getElementById("mobile");
vegData.forEach(item=>{
 let divElem1=document.createElement("div");
 divElem1.className="header-offer-content";
 divElem1.setAttribute("set-id" , item.category);
 let img =document.createElement("img");
 img.className="header-offer__img";
 img.setAttribute("src" , item.img);
 let ahref=document.createElement("a");
 ahref.setAttribute("href" , "#"+item.category);
 ahref.className="header-offer__name";
 ahref.innerHTML=item.category;
divElem1.append(img);
divElem1.append(ahref);
headerright.append(divElem1);
// mobile.append(divElem1);
if(item.category=="Italian Food"){
  divElem1.classList.add("active");
}



  // headerright.insertAdjacentHTML("beforeend" ,'<div class="header-offer-content " set-id="'+ item.category+'"><img  class="header-offer__img" src="'+item.img+'" alt=""><a    href="'+"#"+item.category+'" class="header-offer__name" >'+ item.category+'</a></div>')
  // mobile.insertAdjacentHTML("beforeend" ,' <div class="header-offer-content mobile-offer__item"  set-id="'+ item.category+'"><img  class="header-offer__img" src="'+ item.img+'" alt=""><a href="'+"#"+item.category+'" class="header-offer__name">'+ item.category+'</a></div>' )
})
const mobileData=new Map(foodItem.map(item=>[item['category'],item]));


mobileData.forEach(item=>{
  let divElem1=document.createElement("div");
  divElem1.className="header-offer-content mobile-offer__item";
  divElem1.setAttribute("set-id" , item.category);
  let img =document.createElement("img");
  img.className="header-offer__img ";
  img.setAttribute("src" , item.img);
 
  let ahref=document.createElement("a");
  ahref.setAttribute("href" , "#"+item.category);
  ahref.className="header-offer__name";
  ahref.innerHTML=item.category;
 divElem1.append(img);
 divElem1.append(ahref);
//  headerright.append(divElem1);
 mobile.append(divElem1);
 if(item.category=="Italian Food"){
   divElem1.classList.add("active-mobile")
 }
 
 
 
//    // headerright.insertAdjacentHTML("beforeend" ,'<div class="header-offer-content " set-id="'+ item.category+'"><img  class="header-offer__img" src="'+item.img+'" alt=""><a    href="'+"#"+item.category+'" class="header-offer__name" >'+ item.category+'</a></div>')
//    // mobile.insertAdjacentHTML("beforeend" ,' <div class="header-offer-content mobile-offer__item"  set-id="'+ item.category+'"><img  class="header-offer__img" src="'+ item.img+'" alt=""><a href="'+"#"+item.category+'" class="header-offer__name">'+ item.category+'</a></div>' )
 })



let bascket=[];
let cartadd=document.querySelector("#cart-plus");
let mobilecartadd=document.querySelector('#m-cart-plus')
function addtocart(itemId){
 let filterProduct=foodItem.find(item=>item.id===itemId);
   let index= bascket.indexOf(filterProduct);
 
   if(index===-1){
    document.getElementById(filterProduct.id).classList.add('toggle-heart')
    bascket.push(filterProduct);
    //  console.log(bascket)
   }else if(index>-1){
    alert("added to cart!")
   }

 cartadd.innerHTML=' <i  class="fa fa-cart-plus "></i>'       +bascket.length+'   '+'Items';
 mobilecartadd.innerHTML=' <i  class="fa fa-cart-plus "></i>'    +bascket.length+'   '+'Items'
   totalAmount()


  cartTotal()
}
let cartitems=document.querySelector(".cart-items");

function cartTotal(){
 
  
  cartitems.innerHTML="";
  bascket.map(item=>{
    
   let cartRow=document.createElement("div");
   cartRow.className="cart-row";   
   let chackoutDiv=document.createElement("div");
chackoutDiv.className="chackOut-list__item cart-colum";
   
   let cartColum=document.createElement("img");
   cartColum.className="cart-colum__img ";
   cartColum.setAttribute("src" , item.img);
  


   let chackOutlist=document.createElement("span");
     chackOutlist.className="chackOut-list__Name cart-colum__name";
     chackOutlist.innerHTML=item.category;
   let chackOutBtn=document.createElement("div");
      chackOutBtn.className="chackOut-list__quantity cart-colum__quantity";
   let btnPositive=document.createElement("button");
   btnPositive.className="increase-btn";
   btnPositive.innerHTML="+";
   btnPositive.addEventListener("click" , function(){
   
    increasebtn(item.id)
   })
   let spanQuantiy=document.createElement("span");
   spanQuantiy.innerHTML=item.quantity;
   let btnMulti=document.createElement("button");
   btnMulti.addEventListener("click" , function(){
   
    btndecrese(item.id)
   })
   btnMulti.innerHTML="-";
   btnMulti.className="decrease-btn";
   let chackOutprice=document.createElement("span");
   chackOutprice.className="chackOut-list__price cart-colum__price";
   chackOutprice.innerHTML="$"+item.price;
   chackoutDiv.appendChild(cartColum);
   chackOutBtn.appendChild(btnPositive );
   chackOutBtn.appendChild(spanQuantiy);
   chackOutBtn.appendChild(btnMulti);
   cartRow.appendChild(chackoutDiv) ;

   cartRow.appendChild(chackOutlist) ;
   cartRow.appendChild(chackOutBtn); 
   cartRow.appendChild(chackOutprice) ;
  cartitems.appendChild(cartRow);
  })
  
}







function increasebtn(itemId){
  let findProduct=bascket.find(function(item){
   return item.id==itemId
  })
  
  findProduct.quantity+=1;
 
  cartPrice=(findProduct.price* findProduct.quantity-findProduct.price*(findProduct.quantity-1))/(findProduct.quantity-1);
  findProduct.price=cartPrice*findProduct.quantity;
  cartTotal()
  totalAmount()
 
}

let cartPrice=0;

function btndecrese(itemId){
  let findProduct=bascket.find(function(item){
   return item.id==itemId
  })
  console.log(findProduct.quantity)
  let index=bascket.indexOf(findProduct);
  if(findProduct.quantity>1){
    cartPrice=(findProduct.price* findProduct.quantity-findProduct.price*(findProduct.quantity-1))/(findProduct.quantity);
    findProduct.quantity-=1;
    findProduct.price=cartPrice*findProduct.quantity;
  }else{
   document.getElementById(findProduct.id).classList.remove("toggle-heart");
   bascket.splice(index,1);
   document.getElementById('m-cart-plus').innerText=bascket.length+" "+"Items";
   document.getElementById('cart-plus').innerText=bascket.length+" "+"Items";

  }

  if(bascket.length<1 ){
    document.getElementById("food-item").classList.toggle("food-items");
    document.querySelector('#chackOut').classList.toggle("cart-toggle");
    document.querySelector('#cart-total').classList.toggle("cart-toggle");
    document.querySelector('#desktop-offer').classList.toggle("food-items");
    document.querySelector("#abou").classList.remove("cart");

  

    alert("currntly no items in cart");
  }
  cartTotal()
  totalAmount()
}


document.querySelectorAll(".order").forEach(item=>item.addEventListener("click" , addItems));
document.getElementById("cart-plus").addEventListener("click",addItems)
document.getElementById("m-cart-plus").addEventListener("click",addItems)

function addItems(){



  if(bascket.length>0){
    document.getElementById("food-item").classList.toggle("food-items");
    document.querySelector('#chackOut').classList.toggle("cart-toggle");
    document.querySelector('#cart-total').classList.toggle("cart-toggle");
    document.querySelector('.header-offer').classList.toggle("food-items");
    document.querySelector("#abou").classList.add("cart");


  }
  else{
    alert("Currently no Items in cart!")
  }
}

function totalAmount(){
let sum=0;
 bascket.map(item=>{
  sum+=item.price;
 })
 document.querySelector(".cart-total__Item").innerHTML='Total item:' +bascket.length;  
 document.querySelector(".cart-total__Price").innerHTML='Total price: $'+sum;   

}



// document.querySelector(".bout").addEventListener("click" , addIID)

// function  addIID(){
//   // console.log("b")
//   document.getElementById("food-item").classList.add("food-items");
//   document.querySelector("#abou").classList.remove("cart");
//   // document.querySelector("#about").classList.toggle("cart");
//   // // document.querySelector("#about-item").classList.toggle(".about1");
//   // // document.getElementById("food-item").classList.toggle("food-items");
//   // document.querySelector('#chackOut').classList.toggle("cart-toggle");
//   // document.querySelector('#cart-total').classList.toggle("cart-toggle");
//   document.querySelector('.header-offer').classList.add("food-items");
//   // // document.querySelector("#about").classList.add("cart");
  

// }

// document.querySelectorAll(".service").forEach(item=>item.addEventListener("click" , addProduct));

// function addProduct(){
//   document.querySelector('.header-offer').classList.remove("food-items");
//   document.getElementById("food-item").classList.remove("food-items");
//   document.querySelector("#abou").classList.add("cart");

//   document.querySelector('#chackOut').classList.add("cart-toggle");
//   document.querySelector('#cart-total').classList.add("cart-toggle");

// }


// document.querySelectorAll(".bout").forEach(item=>item.addEventListener("click" , addIID));


// function  addIID(){

//   if(bascket.length>0){
//     document.getElementById("food-item").classList.add("food-items");
//     // document.querySelector('#chackOut').classList.toggle("cart-toggle");
//     // document.querySelector('#cart-total').classList.toggle("cart-toggle");
//     document.querySelector('.header-offer').classList.add("food-items");
//     document.querySelector('#chackOut').classList.add("cart-toggle");
//   document.querySelector('#cart-total').classList.add("cart-toggle");
    
//     document.querySelector("#abou").classList.remove("cart"); 
//     // document.querySelector("#about").classList.remove("cart"); 
//   }else if(bascket.length<1){
//     document.querySelector("#abou").classList.remove("cart"); 
//     // document.querySelector("#about").classList.remove("cart"); 
//     document.getElementById("food-item").classList.add("food-items");
//     document.querySelector('.header-offer').classList.add("food-items");
//   }else{
//     // document.querySelector("#about").classList.remove("cart"); 
//     document.querySelector("#abou").classList.remove("cart"); 
//     document.getElementById("food-item").classList.add("food-items");
//     document.querySelector('.header-offer').classList.add("food-items");
//   }
  // console.log("b")
//   document.getElementById("food-item").classList.add("food-items");
//  document.querySelector("#abou").classList.remove("cart"); 
  // document.querySelector("#about").classList.toggle("cart");
  // // document.querySelector("#about-item").classList.toggle(".about1");
  // // document.getElementById("food-item").classList.toggle("food-items");
  // document.querySelector('#chackOut').classList.toggle("cart-toggle");
  // document.querySelector('#cart-total').classList.toggle("cart-toggle");
  // document.querySelector('.header-offer').classList.add("food-items");
  // // document.querySelector("#about").classList.add("cart");
  

// }


// let headerOffer=document.querySelectorAll(".header-offer-content");
// headerOffer.forEach(item=>{
//   item.addEventListener("click" ,function(){
//     let activeElem=document.querySelector(".active");
//     if(activeElem!==null){
//       activeElem.classList.remove("active");
//     }
//     this.classList.add("active");
//     let show=document.querySelector('.show');
//     let contentId=this.getAttribute("set-id");
//     document.getElementById(contentId).classList.add('show');
//     if(show!==null){
//       show.classList.remove("show");}
//   })
//   })

let headerOffer=document.querySelectorAll(".header-offer-content");
headerOffer.forEach(item=>{
  item.addEventListener("click" ,function(){
   
  //  event.target.classList.add("active");
   
    //  
     document.querySelector(".active").classList.remove("active");
     this.classList.add("active");
    document.querySelector(".show").classList.remove("show");
    let contId=this.getAttribute('set-id');
    document.getElementById(contId).classList.add('show');

  })
})


let headerMobile=document.querySelectorAll(".mobile-offer__item");
headerMobile.forEach(item=>{
  item.addEventListener("click" ,function(){
   
  //  event.target.classList.add("active");
   
    //  
     document.querySelector(".active-mobile").classList.remove("active-mobile");
     this.classList.add("active-mobile");
    document.querySelector(".show").classList.remove("show");
    let contId=this.getAttribute('set-id');
    document.getElementById(contId).classList.add('show');

  })
})






// scroll
let scrollTop=document.querySelector(".arrow");
window.addEventListener('scroll' ,()=>{
  scrollTop.classList.toggle('arrow-active' , window.scrollY>100);
})





 
 
