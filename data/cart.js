export let cart=[];

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