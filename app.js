var getimgs = document.querySelectorAll('.img'); //NodeList
var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');
var getprevbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');
var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');
var getnoactives = document.getElementsByClassName('noactive'); //HTML Collection


var curidx = 1;


for(var i = 0; i < getimgs.length; i++){
    // console.log(getimgs[i]);

    // getimgs[i].addEventListener('click',showmodal)
    getimgs[i].addEventListener('click',function(e){
        showmodal();

        // console.log(e.target.alt);
        // console.log(this.alt);
                                        // remove space 
        const findids = this.alt.split('').filter(rmspace=>rmspace.trim() !== '');

        // console.log(findids);
        // console.log(findids[findids.length-1]);

        curidx = Number(findids[findids.length-1]);
        // console.log(curidx);
        // console.log(typeof curidx);


        // Method 1 
        // const findids = this.alt;
        // console.log(findids);
        // console.log(typeof findids);
        // console.error(findids[6]);
        // console.log(findids[findids.length-1]);
        // console.log(typeof findids[findids.length-1]);


        // Method 2
        // const findids = this.alt.split('').filter(rm => rm.trim() !== '');
        // console.log(findids);
        // console.log(findids[findids.length-1]);

        slideshow(curidx);



               

    })
};

function showmodal(){
    getmodal.style.display = "block";
};

// mehthod 1
// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = "none";
// });

// method 2 
getbtnclose.onclick = function(){
    getmodal.style.display = "none";
};


document.addEventListener('click',function(e){
    // console.log(e.target)

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
})


function currentview(num){
    slideshow(num);
}

getnextbtn.addEventListener('click',function(){
    // console.log('I am next button');
    slideshow(curidx += 1);
});

getprevbtn.addEventListener('click',function(){
    // console.log('I am previous button');

    slideshow(curidx -= 1);
});


// slideshow(curidx)

function slideshow(num){
    // console.log(num);

    var x;

    for(x = 0; x < getviews.length; x++){
        getviews[x].style.display = "none";
    }

    for(x = 0; x < getnoactives.length; x++){
        // getnoactives[x].classList.remove("active");
        getnoactives[x].className = getnoactives[x].className.replace(" active",""); //notice space
    }

    if(num > getviews.length){
        num = 1;
        curidx = 1;
    };

    if(num < 1){
        num = getviews.length;
        curidx = getviews.length;
    };

    // console.log('current indx = ' , curidx);
    // console.log('current num = ' , num);

    getcounter.textContent = `${num} / ${getviews.length}`;

    // 1-1 = 0
    getviews[num-1].style.display = "block";
    // 1-1 = 0
    getnoactives[num-1].className += " active" //have to space making of the append why it is className

    getcaption.innerText = getnoactives[num-1].alt;

}



