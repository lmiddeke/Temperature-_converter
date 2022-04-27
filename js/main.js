//Write your pseduo code first! 

//0->32
//box for entering a temp

//press button to click to activate smurfs
//displays conversion

document.querySelector('#convert').addEventListener('click', convert)

function convert () {
    let temp = document.querySelector('#cels').value
    temp = temp * 9/5 + 32
    document.querySelector('#placeToConvert').innerText = temp
}
