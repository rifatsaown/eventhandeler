type cartItems = {
    [key:string]: number;
}

const addToDb =(id:string)=>{
    const shopingCart:cartItems ={}
    shopingCart[id] = 1;
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
}
export {addToDb};