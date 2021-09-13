function numeroAleatorio(){

    return Math.floor(Math.random() * (7-1))+1
}

function rollOfDice(){
    count = [0,0,0,0,0,0,0,0,0,0,0,0]
    let dado1 = 0
    let dado2 = 0
    let sum = 0

    for(let i = 0; i < 1000; i++){
        dado1 = numeroAleatorio()
        dado2 = numeroAleatorio()

        sum = (dado1 + dado2) -1
    
        count[sum] = count[sum]+1
    
    }
    return count;
}


function printScreen(){
    // vetor = []
    vetor = rollOfDice()
    const list = document.getElementById("#resultado")
    
    for(let i = 1; i < 12;i++){

        const itemList = document.createElement("li")
        itemList.innerText = i+1+" : "+vetor[i]
        list.appendChild(itemList)
    }
    return list;

}
printScreen();
// 2: 32  
// 3: 50  
// 4: 76  
// 5: 120  
// 6: 151  
// 7: 161  
// 8: 125  
// 9: 121  
// 10: 89  
// 11: 52  
// 12: 23

// Inicialize um array chamado *`count`* preenchendo-o com zeros. 
// Em seguida, sempre que uma rolagem de dados resultar em, digamos, 
// sete, adicione um ao valor do 7º elemento do array de contagem.



