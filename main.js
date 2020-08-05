const span = document.querySelector('span.mess-with-me');
span.style.fontSize = '3em';

const pGraph = document.querySelector('p.mess-with-me');
pGraph.style.backgroundColor = 'green';

const removePic = document.querySelector('#hide-me');
removePic.remove()

const firstDino = document.getElementById('triceratops');

firstDino.style.width = '324px';

const turnOrange = function(){
    span.style.color = 'orange'
}

span.addEventListener('click', turnOrange)

const borderItUp = function(){
    firstDino.style.border = ' 1px red solid'
}

firstDino.addEventListener('click', borderItUp);

const featheredDino = document.getElementById('feathers')

const transparent = function(){
    featheredDino.style.opacity = '0.5'
}
featheredDino.addEventListener('click', transparent)

const rowBackground = document.getElementById('row')


const changeBackground = function(){
    rowBackground.style.backgroundColor = 'red'
}

document.getElementById('toggle').addEventListener('click', changeBackground)

biggy = document.querySelector('#biggify')



const hover = function(){
    biggy.style.width = '200px'

}
biggy.addEventListener('mouseover', hover)