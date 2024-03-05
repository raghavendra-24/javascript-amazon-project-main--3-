export let cart=[{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
},{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:3,
}];

export function addToCart(productid){
    let matchingItem;
    cart.forEach((item)=>{
      if(item.productId===productid){
          matchingItem=item;
      }
    })
  
    if(matchingItem){
      matchingItem.quantity++;
    }else{
    cart.push({
      productId:productid,
      quantity:1,
    });
  }
  }