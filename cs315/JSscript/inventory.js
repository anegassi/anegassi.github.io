
let libraryDB = [];


function add(){
    console.log("hello")
    let productNameInput = document.getElementById("itemname").value;
        //itemList.productName=productNameInput;
       //libraryDB.push(productNameInput);
    let categoryInput = document.getElementById("itemcategory").value;
       // itemList.category=categoryInput
       //libraryDB.push(categoryInput);
    let quantityInput = document.getElementById("quantity").value;
      //itemList.quantity=categoryInput
       //libraryDB.push(quantityInput);
    let ratingInput= document.getElementById("ratings").value;
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


function buildTable(libraryDB2){
    var table = document.getElementById("myTable");
    table.innerHTML="";
    for (var i = 0; i < libraryDB2.length; i++){
        
        row = `<tr>                    
                        <td>${libraryDB[i].productName}</td>
                       <td>${libraryDB[i].category}</td>
                        <td>${libraryDB[i].quantity}</td>
                        <td>${libraryDB[i].ratings}</td>
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



// let libraryDB = [];

//       function add() {
//         let productNameInput = document.getElementById("itemname").value;
// alert(productName)
//         let categoryInput = document.getElementById("itemcategory").value;
// alert(categoryInput)
//         let quantityInput = document.getElementById("quantity").value;
//         alert(quantityInput)
//         let ratingInput = document.getElementById("ratings").value;
//         const itemList = {
//           productName: productNameInput,
//           cateory: categoryInput,
//           quantity: quantityInput,
//           rating: ratingInput,
//         };
//         alert("hello");
//         libraryDB.push(itemList);
//         console.log(libraryDB);
//         buildTable(libraryDB);
//       }

     
   
//       function buildTable(data) {
//         var table = document.getElementById("myTable");

//         var row = `<tr>
//                                   <td>${data[i].productName}</td>
//                                   <td>${data[i].cateory}</td>
//                                   <td>${data[i].quantity}</td>
//                             </tr>`;
//         table.innerHTML += row;
//       }



//     var myArray = [
//     {'name':'Michael', 'age':'30', 'birthdate':'11/10/1989'},
//     {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
//     {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
//     {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
//     {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
//     {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
// ]

// buildTable(myArray)



// function buildTable(data){
//     var table = document.getElementById('myTable')

//     for (var i = 0; i < data.length; i++){
//         var row = `<tr>
//                         <td>${data[i].name}</td>
//                         <td>${data[i].age}</td>
//                         <td>${data[i].birthdate}</td>
//                   </tr>`
//         table.innerHTML += row


//     }
// }


    
