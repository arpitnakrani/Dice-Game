function myfun()
{
    var d1 = Math.floor(Math.random()*6 + 1) ;
    var d2 = Math.floor(Math.random()*6 + 1) ;
    console.log(d1);
    console.log(d2);

    if(d1 ==1){ document.querySelector(".left-img").setAttribute("src" , "images/dice1.png");}
    if(d1 ==2){ document.querySelector(".left-img").setAttribute("src" , "images/dice2.png");}
    if(d1 ==3){ document.querySelector(".left-img").setAttribute("src" , "images/dice3.png");}
    if(d1 ==4){ document.querySelector(".left-img").setAttribute("src" , "images/dice4.png");}
    if(d1 ==5){ document.querySelector(".left-img").setAttribute("src" , "images/dice5.png");}
    if(d1 ==6){ document.querySelector(".left-img").setAttribute("src" , "images/dice6.png");}

    if(d2 == 1){ document.querySelector(".right-img").setAttribute("src" , "images/dice1.png");}
    if(d2 == 2){ document.querySelector(".right-img").setAttribute("src" , "images/dice2.png");}
    if(d2 ==3){ document.querySelector(".right-img").setAttribute("src" , "images/dice3.png");}
    if(d2 ==4){ document.querySelector(".right-img").setAttribute("src" , "images/dice4.png");}
    if(d2 ==5){ document.querySelector(".right-img").setAttribute("src" , "images/dice5.png");}
    if(d2 ==6){ document.querySelector(".right-img").setAttribute("src" , "images/dice6.png");}

    if(d1>d2)
    {
        document.querySelector("h1").innerHTML="player 1 won";
    }
    else if(d2 > d1)
    {
        document.querySelector("h1").innerHTML="player 2 won";

    }
    else
    {
        document.querySelector("h1").innerHTML="draw !";

    }


}