

let  a= document.getElementById("firstvalue");
let b=document.getElementById("secondvalue");
   
    function add(){
        let result=(Number(a.value)+Number(b.value));
       
        output= document.getElementById("displayArea");
        output.innerHTML=result;
        
        //let pelement= document.createElement("p")
       //document.body.prepend(pelement)
    
    }
     function subt(){
        let result=(Number(a.value) - Number(b.value));
        
        output= document.getElementById("displayArea");
        output.innerHTML=result;
        
        //let pelement= document.createElement("p")
        //document.body.prepend(pelement);

    }
    function multi(){
         let result=(Number(a.value)* Number(b.value));
         
         output= document.getElementById("displayArea");
         output.innerHTML=result;
         
         //let pelement= document.createElement("p");
          //document.body.prepend(pelement);
          
    }

    /////////////////////////////////
    
    function print(){
      let  input= document.getElementById("displayArea1");
     let result = input.value;

       textarea= document.getElementById("displayArea2");
       textarea.innerHTML=result;
       input.value=null;

       //let pelement = document.createElement("p");
         // document.body.append(result);

    }
    