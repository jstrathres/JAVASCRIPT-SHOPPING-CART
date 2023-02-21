let items =[];

function AddItem(name, cost)  //function
{
    let newItem = 
    {
        Name: name,
        Cost: cost,
    }
    items.push (newItem);
}

function DisplayItems() 
{
    console.log(items);
}