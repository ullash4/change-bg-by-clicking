/* Project: Change the background color by generating Random rbg color by clicking a button */

document.getElementById('bg-btn').addEventListener('click', function(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
})
