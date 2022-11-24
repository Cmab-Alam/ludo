var randomNumber1 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);

var randomImage1 = 'dice'+randomNumber1+ '.png'

var randomImage1Source = 'images/'+ randomImage1

var image1= document.querySelector('img')

// console.log(image1);

image1.setAttribute('src',randomImage1Source)


var ramdomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2Source = 'images/dice'+ramdomNumber2+".png"
var image2 =  document.querySelectorAll('img')[1]
image2.setAttribute('src',randomImage2Source)


if(randomNumber1>ramdomNumber2){
    document.querySelector('h1').innerHTML= 'Player1 wins🎈'
}
else if( randomNumber1<ramdomNumber2){
    document.querySelector('h1').innerHTML= 'Player2 wins🎈'
}

else{
    document.querySelector('h1').innerHTML= 'Game Drawn'
}