
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
        
        alert("Calling "+ title +' '+number)
        
        const newRealCoin = realCoinNum - 20;
        document.getElementById('real-coin').innerText = newRealCoin;
        
        const container = document.getElementById('card-container');
        const newDiv = document.createElement('div')
        newDiv.innerHTML= `
        <div class="mt-5 shadow-sm">
        <div class="flex items-center justify-between">
        <div class="">
        <h4 class="text-[18px] font-bold lg:w-44">${title}</h4>
        <p class="text-[15px] text-gray-500">${number}</p>
        </div>
        <p class="text-[16px] text-gray-600">${time}</p>
        </div>
        
        
        `
        container.appendChild(newDiv);
        
    })
    
}

// clear functionality

document.getElementById("clear-btn").addEventListener("click" , function(){
    
    const container = document.getElementById('card-container');
    container.innerText = ''
})

// copy btn 1st part

const copyBtns = document.getElementsByClassName("copy-btn")

for(const btn of copyBtns){
    btn.addEventListener("click" , function(){
        
        const number = btn.parentNode.parentNode.children[3].innerText;
        alert('You are copying the number: ' + number)
        
        const realCopy = document.getElementById('copy-real-btn').innerText;
        const newCopy = Number(realCopy) + 1;
        document.getElementById('copy-real-btn').innerText = newCopy
    })
    
}


const btns = document.querySelectorAll('.copy-btn');

// console.log(btn);
for(const btn of btns){
  btn.addEventListener('click', function() {

    const card = btn.closest('.card');
    const text = card.querySelector('.copy-text').textContent.trim();

    navigator.clipboard.writeText(text);
    // alert("Copied: " + text);
  })
  }