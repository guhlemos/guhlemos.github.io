
    let i = 0;
    let images = [];
    let time = 3000;

    images[0] = 'img/caneca1.jpg';
    images[1] = 'img/caderno1.jpg';
    images[2] = 'img/caneta1.jpg';
    images[3] = 'img/cartao_frente1.png';
    images[4] = 'img/cartao_verso1.png';

    function changeImg(){

    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
    
    window.onload = changeImg;

		
	