player1n=localStorage.getItem("player1name");
player2n=localStorage.getItem("player2name");
player1s=0
player2s=0
document.getElementById("name1").innerHTML=player1n+" : " 
document.getElementById("name2").innerHTML=player2n+" : " 
document.getElementById("score1").innerHTML=player1s
document.getElementById("score2").innerHTML=player2s
document.getElementById("playerq").innerHTML="Question turn : "+player1n
document.getElementById("playera").innerHTML="Answer turn : "+player2n
function send(){
    n1=document.getElementById("number1").value
    n2=document.getElementById("number2").value
    ans=parseInt(n1)+parseInt(n2)
    q="<h4>"+n1+"+"+n2+"</h4>"
    i="<br>Answer : <input type='number' id='i1'>"
    b="<br><br><button class='btn btn-info' onclick='chek()'>Submit</button>"
    x=q+i+b
    document.getElementById("output").innerHTML=x
    document.getElementById("number1").innerHTML=""
    document.getElementById("number2").innerHTML=""
    }

    qt="player1"
at="player2"
function chek(){
getans=document.getElementById("i1").value

if(ans==getans){
    if(at=="player1"){
        player1s+=1
        document.getElementById("score1").innerHTML=player1s
    }
    else{player2s+=1
        document.getElementById("score2").innerHTML=player2s

    }
}   
if(qt=="player1")
{
    qt="player2"
    document.getElementById("playerq").innerHTML="Quetion turn : "+player2n
}
else{qt="player1"
document.getElementById("playerq").innerHTML="Quetion turn : "+player1n

}
           
if(at=="player1")
{
    at="player2"
    document.getElementById("playera").innerHTML="Answer turn : "+player2n
}
else{at="player1"
document.getElementById("playera").innerHTML="Answer turn : "+player1n

}
document.getElementById("output").innerHTML=""

}