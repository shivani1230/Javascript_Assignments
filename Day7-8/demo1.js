let products = [
{ 
    id: 1,
    name:"Laptop Charger",
    color:"Black",
    price:450,
    image:"img1.jpg",
    description:"New Charger can be carried anywhere",
},
{
    id : 2,
    name:"Mobile Stand",
    color:"Blue",
    price:650,
    image:"img2.jpg",
    description:"Mobile stand for hands free phone",
},
{
    id:3,
    name:"Vivo Mobile",
    color:"Purple",
    price:11550,
    image:"img3.jpg",
    description:"Vivo mobile phone new release",
},
{
    id:4,
    name:"Headphones",
    color:"Blue-Yellow",
    price:1050,
    image:"img4.jpg",
    description:"Headphones suitable for all",
},
{
    id:5,
    name:"Laptop",
    color:"Gray",
    price:28500,
    image:"img5.jpg",
    description:"Gaming Laptop for all game lovers",
},
{
    id:6,
    name:"Phone Cases",
    color:"Multiple",
    price:120,
    image:"img6.jpg",
    description:"Best cases for each mobile",
},
{
    id : 7,
    name:"Bluetooth Speaker",
    color:"Gray-black",
    price:1650,
    image:"img7.jpg",
    description:"Bluetooth Speaker for hands free",
},
{
    id : 8,
    name:"Earphones",
    color:"Black-Blue",
    price:250,
    image:"img8.jpg",
    description:"Listen to the music with this all new earphones",
},
{
    id : 9,
    name:"Samsung Mobile",
    color:"Sky Blue",
    price:16650,
    image:"img9.jpg",
    description:"Mobile with all new features",
},
{
    id : 10,
    name:"USB",
    color:"Multi-colors",
    price:150,
    image:"img10.jpg",
    description:"To transfer your work easily use this USB",
},
{
    id : 11,
    name:"Power Bank",
    color:"Blue",
    price:1050,
    image:"img11.jpg",
    description:"Power bank to charge your phone anywhere",
},
{
    id : 12,
    name:"Portable charger",
    color:"Black",
    price:1250,
    image:"img12.jpg",
    description:"Multiple mobile charging can be done",
},
];
// console.log(products);

cart = [];
let count=0;
function displayprod(prodData, who ="productwrapper"){
    let prodString = "";

    prodData.forEach(function(product,index){
        let {id,name,color,price,image,description} = product;

        if(who == "productwrapper"){
            prodString += `<div class="product">
            <div class="proimg"> <img src="Productss/${image}" width="100%"></div>
            <h3> ${name} </h3>
            <p style="color:black"> Color : ${color} </p>
            <p style="color:black"> Price : ${price} </p>
            <p style="color:black"> ${description} </p>
            <p> <button onclick='addcart("${id}")'>Add to Cart</button>
            <button>Like</button>
            </p>
            </div>`;
        }
        else if(who == "cart"){
            prodString += `<div class="product">
            <div class="proimg"> <img src="Productss/${image}" width="100%"></div>
            <h3> ${name} </h3>
            <p style="color:black"> Color : ${color} </p>
            <p style="color:black"> Price : ${price} </p>
            <p style="color:black"> ${description} </p>
            <p> <button onclick="removecart(${id})">Remove item</button>
            </p>
            </div>`;
        }
    });
    document.getElementById(who).innerHTML=prodString;
}
displayprod(products);

function searchProduct(searchValue){
    let searchpro = products.filter(function(product,index){
        let searchString = product.name + " " + product.color + " " + product.description;

        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 ;
    });
    displayprod(searchpro);
  }
  
function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }

  let flag=false;
function addcart(id){
    flag=false;
    let prod = getProductByID(products,id);
    
    cart.forEach(function(element){
        if(element.id==prod.id){
            flag=true;
        }
    })
    if(flag){
        alert("Product already added in cart");
    return 0;
    }
     cart.push(prod);
    //  console.log(cart);
    count += 1;
    document.getElementById("num").innerHTML = count;
    // let type="cartd";
    // let place="card"
    displayprod(cart,"cart");
    }


  function removecart(id){
      let index = cart.findIndex(function(product){
          return product.id == id;
      });
      cart.splice(index,1);
      displayprod(cart,"cart");
  }

  function filter(){
      let mini=document.getElementById("min").value;
      let maxx=document.getElementById("max").value;
  let item = products.filter(function(isa){
      return isa.price >= mini && isa.price<=maxx;
  })
    displayprod(item);
    document.getElementById("min").value="";
    document.getElementById("max").value="";
    }