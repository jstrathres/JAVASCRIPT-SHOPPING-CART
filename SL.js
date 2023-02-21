let items =[]; 

function AddItem(name, cost)  //function
{
    let newItem = 
    {
        Name: name,
        Cost: cost,
    };
    items.push (newItem);


// target html 
// Dom manipulation, use 
// . to target class
// # for id
// element name for element
//targets only the <div> in this case
// document.querySelector(".cart").innerHTML += "<li/>";
document.querySelector(".cart").innerText += `${newItem.Name} $${newItem.Cost}\n`;

}

function DisplayItems() {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      console.log(item.Name + ' - $' + item.Cost);
      total += item.Cost;             
      
    }

    let tax = total *0.06;
    let grandTotal = total + tax;
    console.log('Total cost: $' + total.toFixed(2));
    console.log('Total tax: $' + tax.toFixed(2));
    console.log('Grand Total: $' + grandTotal.toFixed(2));


    document.querySelector(".total").innerText = `${total.toFixed(2)}`;
    document.querySelector(".tax").innerText = `${tax.toFixed(2)}`;
    document.querySelector(".grandtotal").innerText = `${grandTotal.toFixed(2)}`;

    // clears cart
    cart =[];  
  }