let circleCtn = document.querySelector('#circleCtn');
let circle = document.querySelector('#circle');

const getKeyAndMove = (e) => {				
    const keyCode = e.which || e.keyCode;

    switch(keyCode){
        case 37: 
            moveLeft();
            break;
        case 38: 
            moveUp();
            break;
        case 39: 
            moveRight();
            break;
        case 40: 
            moveDown();
            break;						
    }
}

const setBallColor = (isBallInBounds = true) => {
    if(!isBallInBounds){
        circle.style.background = 'red';
    }else if(isBallInBounds && circle.style.background === 'red'){
        circle.style.background = '#9E9E9E';
    }
}

const moveLeft = () => {
    const circleCtnLeft = parseFloat(circleCtn.style.left);
    const circleLeft = parseFloat(circle.style.left);
    let isBallInBounds = true;

    if(circleLeft + circleCtnLeft > circleCtnLeft){
        circle.style.left = circleLeft-5+'px';
    }else{
        isBallInBounds = false;
    }

    setBallColor(isBallInBounds);
}

const moveUp = () => {
    const circleCtnTop = parseFloat(circleCtn.style.top);
    const circleTop = parseFloat(circle.style.top);
    let isBallInBounds = true;

    if(circleTop + circleCtnTop > circleCtnTop){
        circle.style.top = circleTop-5+'px';
    }else{
        isBallInBounds = false;
    }

    setBallColor(isBallInBounds);
}

const moveRight = () => {
    const circleCtnLeft = parseFloat(circleCtn.style.left);
    const circleCtnRight = circleCtnLeft+parseFloat(circleCtn.style.width);
    const circleLeft = parseFloat(circle.style.left);
    const circleRight = circleLeft+parseFloat(circle.style.width);
    let isBallInBounds = true;

    if(circleRight < circleCtnRight - circleCtnLeft){
        circle.style.left = circleLeft+5+'px';
    }else{
        isBallInBounds = false;
    }

    setBallColor(isBallInBounds);
}

const moveDown = () => {
    const circleCtnTop = parseFloat(circleCtn.style.top);
    const circleCtnDown = circleCtnTop+parseFloat(circleCtn.style.height);
    const circleTop = parseFloat(circle.style.top);
    const circleDown = circleTop+parseFloat(circle.style.height);
    let isBallInBounds = true;

    if(circleDown < circleCtnDown - circleCtnTop){
        circle.style.top = circleTop+5+'px';
    }else{
        isBallInBounds = false;
    }

    setBallColor(isBallInBounds);
}