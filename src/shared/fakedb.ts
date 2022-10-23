type cartItems = {
    [key:string]: number;
}
const addToDb =(id:string)=>{
    let shopingCart:cartItems;
    const getItem = localStorage.getItem('shoping-cart');
    if(getItem){
        shopingCart = JSON.parse(getItem);
    }
    else{
        shopingCart ={}
    }


    const quantity = shopingCart[id];
    if(quantity){
        shopingCart[id] = quantity + 1;
    }
    else{
        shopingCart[id] = 1;
    }
    
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}
export {addToDb};