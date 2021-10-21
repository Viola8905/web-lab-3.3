//task 1 фунти в кілограми(1 фунт == 0,40951 кг)


const poundToKg = 0.40951;
const holder = document.querySelector(".header_holder");

document.querySelector(".convert_button").onclick = () => {
  const inputValue = document.getElementById("input").value;
  const newDiv = document.createElement("div");
  let convertValue;


  if(inputValue >= 0){
    
    convertValue = poundToKg * inputValue;
    newDiv.innerHTML = convertValue.toFixed(2);
   
  }
  else{
    
    newDiv.innerHTML = "wrong type of a number";
  }



  
  holder.appendChild(newDiv);
 
  
  document.getElementById("input").value='';
 
};


