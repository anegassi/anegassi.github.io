
    let libraryDB = [];


function add(){
    console.log("hello")
    let productNameInput = document.getElementById("itemname").value;
        //itemList.productName=productNameInput;
       //libraryDB.push(productNameInput);
    let categoryInput = document.getElementById("itemcategory").value;
       // itemList.category=categoryInput
       //libraryDB.push(categoryInput);
    let quantityInput = +(document.getElementById("quantity").value);
      //itemList.quantity=categoryInput
       //libraryDB.push(quantityInput);
    let ratingInput= +(document.getElementById("ratings").value);
       const itemList = {
           productName:productNameInput,
           category:categoryInput,
           quantity:quantityInput,
           ratings:ratingInput
       };
       libraryDB.push(itemList)
       console.log(libraryDB)
       
    buildTable(libraryDB)    

}


function buildTable(libraryDB){
    var table = document.getElementById("myTable");
    table.innerHTML="";
    for (let i = 0; i < libraryDB.length; i++){
        
        row = `<tr>                    
                        <td>${libraryDB[i].productName}</td>
                       <td>${libraryDB[i].category}</td>
                        <td>${libraryDB[i].quantity}</td>
                        <td>${libraryDB[i].ratings}</td>
                        <td> <button type="button" class="btn btn-info" onclick="delet()">Delete</button><td/>
                        <td> <button type="button" class="btn btn-info" onclick="edit()">update</button><td/>
                  </tr>`
    
        table.innerHTML += row;
    }
       
}

function sort(){
    let querySelect=document.querySelectorAll('table th');
    for(let header of querySelect){
        if(header.dataset.column=="productname"){
            if(header.dataset.order=="desc"){
            libraryDB.sort((a,b)=>a.productName>b.productName?1:-1)
            header.innerHTML="Product Name &#9650"
            header.dataset.order="asc"
            console.log(header.dataset.order)
            }
            else if(header.dataset.order=="asc"){
                libraryDB.sort((a,b)=>a.productName<b.productName?1:-1)
                header.innerHTML="Product Name &#9660"
                header.dataset.order="desc"
                console.log(header.dataset.order)
            }
            
            
        }

        
    }
    buildTable(libraryDB)
}

function sort1(){
    let querySelect=document.querySelectorAll('table th');
    for(let header of querySelect){
        

       if(header.dataset.column=="quantity"){
            if(header.dataset.order=="desc"){
            libraryDB.sort((a,b)=>a.quantity - b.quantity)
            header.innerHTML="Quantity &#9650"
            header.dataset.order="asc"
            console.log(header.dataset.order)
            }
            else if(header.dataset.order=="asc"){
                libraryDB.sort((a,b)=>b.quantity - a.quantity)
                header.innerHTML="Quantity &#9660"
                header.dataset.order="desc"
                console.log(header.dataset.order)
            }
            
            
        }
         
    }
    buildTable(libraryDB)
}

let filterFunction = function(){
    console.log(this);
    let querySelector = document.querySelectorAll("button");
    console.log(querySelector)
    let filtered = [];
    for  (let button of querySelector){
        console.log(button)
        if (button.id=="btnQuantity"){
            filtered = libraryDB.filter( obj => obj.quantity>100);
            break;
        }
        else if(button.id=="btnRating"){
            filtered = libraryDB.filter( obj => obj.ratings>4);
            
        }
    }
    buildTable(filtered);
}


let filterQuantity = () =>{
    let filtered = [];
    filtered = libraryDB.filter( obj => obj.quantity>100);
    // let querySelect = document.querySelectorAll('button');

    // for (let button of querySelect){
    //     if (button.id==btnQuantity){
    //         filtered = libraryDB.filter( obj => obj.quantity>100);
    
    // }
    buildTable(filtered);
}

let filterRating = () =>{
    let filtered = [];
    filtered = libraryDB.filter( obj => obj.ratings>4);
    buildTable(filtered);
}



    




