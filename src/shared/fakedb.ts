type cartItems = {
    [key:string]: number;
}
// Add to cart
const addToDb =(id:string)=>{
    let shopingCart:cartItems ={};
    //get data from localStorage
    const getItem = localStorage.getItem('shoping-cart');
    if(getItem){shopingCart = JSON.parse(getItem);}

    //add data to localStorage
    const quantity = shopingCart[id];
    if(quantity){shopingCart[id] = quantity + 1;}
    else{shopingCart[id] = 1;}
    
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}
// delete from localStorage
const deleteFromDb = (id:string)=>{
    const getItem = localStorage.getItem('shoping-cart');
    if(getItem){
        const shopingCart = JSON.parse(getItem);
        delete shopingCart[id];
        localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
    }
}
// delete localstorage
const clearTheCart = ()=>{
    localStorage.removeItem('shoping-cart');
}
//reducer function
const getTotalPrice = (product: []) =>{
    const total = (previous:number,current:{price:number}) => previous + current.price; 
    const totalPrice = product.reduce(total,0);
    return totalPrice;
}

export {addToDb , deleteFromDb,clearTheCart, getTotalPrice as getTotal};