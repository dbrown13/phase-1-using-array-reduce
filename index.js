const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const initialValue = 0;
const totalBatteries = batteryBatches.reduce(function(total, batches) {
    return batches + total
});

// function getTotalAmountForProducts(products) {
//     let totalPrice = 0;
  
//     for (const product of products) {
//       totalPrice += product.price;
//     };
  
//     return totalPrice;
//   }
  
//   console.log(getTotalAmountForProducts(products)); 