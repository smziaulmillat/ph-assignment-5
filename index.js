
const hearts= document.getElementsByClassName('heart-btn')

for(const heart of hearts){
    // console.log(heart);
    heart.addEventListener('click' , function(){
        const heartNum = document.getElementById('real-heart').innerText;
        const makeHeartIntoNum = Number(heartNum);
        const newHeartNum = makeHeartIntoNum + 1;
        
        document.getElementById('real-heart').innerText = newHeartNum;
    })
}

// coin function

const calls= document.getElementsByClassName('call-btn')

for(const call of calls){
    call.addEventListener("click" , function(){
        const realCoin = document.getElementById('real-coin').innerText;
        const realCoinNum = Number(document.getElementById('real-coin').innerText);

        if(realCoinNum < 20){
            alert("Sorry you don't have sufficient coin, you need atleast 20 coins")
            return;
        }

        const title = call.parentNode.parentNode.children[1].innerText;
        const number = call.parentNode.parentNode.children[3].innerText;
        const time = new Date().toLocaleTimeString()
        // console.log(time);

        alert("Calling "+ title +' '+number)

        const newRealCoin = realCoinNum - 20;
        document.getElementById('real-coin').innerText = newRealCoin;
        
        const container = document.getElementById('card-container');
        const newDiv = document.createElement('div')
        newDiv.innerHTML= `
        <div class="mt-5">
                         <div class="flex items-center justify-between">
                             <div class="">
                                 <h4 class="text-[18px] font-bold w-44">${title}</h4>
                                 <p class="text-[15px] text-gray-500">${number}</p>
                             </div>
                             <p class="text-[16px] text-gray-600">${time}</p>
                         </div>


        `

        container.appendChild(newDiv);
        

    })

}