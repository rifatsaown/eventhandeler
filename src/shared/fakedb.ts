const addToDb =(id:string)=>{
    const quantity = localStorage.getItem(id);
    if (quantity){
        const newQuantity = parseInt(quantity) + 1
        localStorage.setItem(id, String(newQuantity))
    }
    else{ 
        localStorage.setItem(id,'1');
    }
}
export {addToDb};