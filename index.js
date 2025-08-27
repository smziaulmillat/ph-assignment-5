
const hearts= document.getElementsByClassName('heart-btn')

for(const heart of hearts){
    // console.log(heart);
    heart.addEventListener('click' , function(){
        const heartNum = document.getElementById('real-heart').innerText
        // console.log(heartNum);
        const makeHeartIntoNum = Number(heartNum)
        const newHeartNum = makeHeartIntoNum + 1;
        
        document.getElementById('real-heart').innerText = newHeartNum;
    })
}




