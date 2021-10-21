//task Розробити програму, яка за номером року Y визначає номер століття C
//(врахувати, що початком XX століття був 1901, а не 1900 рік).
const holder=document.querySelector(".holder");
function years(){
    let arr2=[];
    let a=100;
    for(let i=0;i<21;i++){
        arr2.push(a);
        a+=100;
    }
    return arr2;

}

console.log(years());




function century(y,arr){
    let cen=1;
    for(let i=0;i<arr.length;i++){
        if(y>arr[i] && y<arr[i+1]){
            return `${cen+1}'th century on the street`
           
        }
        else if (y<100 && y>0){
            return "1`th century on the street ";
        }
        else{
            return "wrong type of a number"
        }
        cen++;
        
    }
   
}


//console.log(century(999,years()));



document.querySelector('.show').onclick= () => {
    const inputValue = +document.getElementsByClassName("year")[0].value;
    
    const newDiv = document.createElement("div");
    const centur = century(inputValue,years());

    newDiv.innerHTML = centur ;
    holder.appendChild(newDiv);
    document.getElementsByClassName(".year").value='';


}