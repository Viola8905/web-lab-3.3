//6. Інвестор вклав S тис. грн.. на 20 років під 20% річних, податок складає 5% від суми
//прибутку. Визначити за допомогою циклів суму, яку він одержить.



function cash ( s, years){
   
    for(let i=0;i < years;i++){
        if (s > 0){
            s += (s*0.2);
        }
        else{
            s = 0;
        }
    }
    let cas = s-(s*0.05);
    return cas;
}

console.log(cash(1000,2));


document.querySelector('.show').onclick= () => {
    const inputValue = +document.getElementsByClassName("suma")[0].value;
    let money = cash(inputValue,2);
    holder = document.querySelector('.holder');


    let newDiv = document.createElement("div");
    newDiv.innerHTML = money ;
    holder.appendChild(newDiv);

    document.getElementsByClassName(".suma").value='';

}




