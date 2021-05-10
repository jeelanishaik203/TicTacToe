var players=["circle","cross"];
var activeplayer=0;
var values=[1,1];
var setval=[0,0,0,0,0,0,0,0,0];
var player1_name="player-1";
var player2_name="player-2";

function checkreset()
{
    if(setval[0]==1&&setval[1]==1&&setval[2]==1)
    {
        return "winner";
    }
    else if(setval[3]==1&&setval[4]==1&&setval[5]==1)
    {
        return "winner";
    }
    else if(setval[6]==1&&setval[7]==1&&setval[8]==1)
    {
        return "winner";
    }
    else if(setval[0]==1&&setval[3]==1&&setval[6]==1)
    {
        return "winner";
    }
    else if(setval[1]==1&&setval[4]==1&&setval[7]==1)
    {
        return "winner";
    }
    else if(setval[2]==1&&setval[5]==1&&setval[8]==1)
    {
        return "winner";
    }
    else if(setval[0]==1&&setval[4]==1&&setval[8]==1)
    {
        return "winner";
    }
    else if(setval[2]==1&&setval[4]==1&&setval[6]==1)
    {
        return "winner";
    }
    else if(setval[0]==2&&setval[1]==2&&setval[2]==2)
    {
        return "winner";
    }
    else if(setval[3]==2&&setval[4]==2&&setval[5]==2)
    {
        return "winner";
    }
    else if(setval[6]==2&&setval[7]==2&&setval[8]==2)
    {
        return "winner";
    }
    else if(setval[0]==2&&setval[4]==2&&setval[8]==2)
    {
        return "winner";
    }
    else if(setval[2]==2&&setval[4]==2&&setval[6]==2)
    {
        return "winner";
    }
    else if(setval[0]==2&&setval[3]==2&&setval[6]==2)
    {
        return "winner";
    }
    else if(setval[1]==2&&setval[4]==2&&setval[7]==2)
    {
        return "winner";
    }
    else if(setval[2]==2&&setval[5]==2&&setval[8]==2)
    {
        return "winner";
    }
}
function checkwinner()
{
    
    var status=checkreset();
    if(status=="winner")
    {
        players=["circle","cross"];
    
    values=[1,1];
    setval=[0,0,0,0,0,0,0,0,0];
    hideImage();

    }
    return status;
}
document.getElementById("tile1").addEventListener("click", function(){

    if(setval[0]==0)
    {
        var tile1=document.getElementById("imgtile1");
        tile1.style.display='block';
       tile1.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile1.style.height="100px";
       tile1.style.width="100px";
        
      (activeplayer!=0)?setval[0]=2:setval[0]=1;
    values[activeplayer]+=1;
    
       if( checkwinner()=="winner"){
           alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
          
       }
       (activeplayer!=0)?activeplayer=0:activeplayer=1;
    }
  });
  document.getElementById("tile2").addEventListener("click", function(){

    if(setval[1]==0)
    {
        var tile2=document.getElementById("imgtile2");
        tile2.style.display='block';
       tile2.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile2.style.height="100px";
       tile2.style.width="100px";
    (activeplayer!=0)?setval[1]=2:setval[1]=1;
    values[activeplayer]+=1;

 
 console.log(setval);
 if( checkwinner()=="winner"){
    alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
}(activeplayer!=0)?activeplayer=0:activeplayer=1;
}
 });
 document.getElementById("tile3").addEventListener("click", function(){

    if(setval[2]==0)
    {
        var tile3=document.getElementById("imgtile3");
        tile3.style.display='block';
       tile3.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile3.style.height="100px";
       tile3.style.width="100px";
    (activeplayer!=0)?setval[2]=2:setval[2]=1;
    values[activeplayer]+=1;
 
 console.log(setval);
 if( checkwinner()=="winner"){
    alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
}(activeplayer!=0)?activeplayer=0:activeplayer=1;
    }
 });
 document.getElementById("tile4").addEventListener("click", function(){

    if(setval[3]==0)
    {
        var tile4=document.getElementById("imgtile4");
        tile4.style.display='block';
       tile4.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile4.style.height="100px";
       tile4.style.width="100px";
    (activeplayer!=0)?setval[3]=2:setval[3]=1;
    values[activeplayer]+=1;
    if( checkwinner()=="winner"){
        alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
    }(activeplayer!=0)?activeplayer=0:activeplayer=1; console.log(setval);

    }
 });
 document.getElementById("tile5").addEventListener("click", function(){

    if(setval[4]==0)
    {
        var tile5=document.getElementById("imgtile5");
        tile5.style.display='block';
       tile5.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile5.style.height="100px";
       tile5.style.width="100px";
    (activeplayer!=0)?setval[4]=2:setval[4]=1;
    values[activeplayer]+=1;
    if( checkwinner()=="winner"){
        alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
    }(activeplayer!=0)?activeplayer=0:activeplayer=1; console.log(setval);

    }
 });
document.getElementById("tile6").addEventListener("click", function(){

    if(setval[5]==0)
    {
        var tile6=document.getElementById("imgtile6");
        tile6.style.display='block';
       tile6.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile6.style.height="100px";
       tile6.style.width="100px";
     (activeplayer!=0)?setval[5]=2:setval[5]=1;
     values[activeplayer]+=1;
     if( checkwinner()=="winner"){
        alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
    }(activeplayer!=0)?activeplayer=0:activeplayer=1;  console.log(setval);

    }
  });
  document.getElementById("tile7").addEventListener("click", function(){
    if(setval[6]==0)
    {
        var tile7=document.getElementById("imgtile7");
        tile7.style.display='block';
       tile7.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile7.style.height="100px";
       tile7.style.width="100px";
     (activeplayer!=0)?setval[6]=2:setval[6]=1;
     values[activeplayer]+=1;
     if( checkwinner()=="winner"){
        alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
    }(activeplayer!=0)?activeplayer=0:activeplayer=1;  console.log(setval);

    }
  });
  document.getElementById("tile8").addEventListener("click", function(){
    if(setval[7]==0)
    {
        var tile8=document.getElementById("imgtile8");
        tile8.style.display='block';
       tile8.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile8.style.height="100px";
       tile8.style.width="100px";
     (activeplayer!=0)?setval[7]=2:setval[7]=1;
     values[activeplayer]+=1;
     if( checkwinner()=="winner"){
        alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
    }(activeplayer!=0)?activeplayer=0:activeplayer=1;  console.log(setval);

    }
  });
  document.getElementById("tile9").addEventListener("click", function(){
    if(setval[8]==0)
    {
        var tile9=document.getElementById("imgtile9");
        tile9.style.display='block';
       tile9.src = "img/"+players[activeplayer]+"-"+values[activeplayer]+".png";
       tile9.style.height="100px";
       tile9.style.width="100px";
     (activeplayer!=0)?setval[8]=2:setval[8]=1;
     values[activeplayer]+=1;
     if( checkwinner()=="winner"){
        alert("player-"+(activeplayer+1)+"has Won");
           activeplayer=0;
    }(activeplayer!=0)?activeplayer=0:activeplayer=1;  console.log(setval);

    }
  });
  function hideImage() {
    for(var i=1;i<=9;i++)
    {
    var img = document.getElementById('imgtile'+i);
    img.style.display='none';
    }
}
  document.querySelector(".btn-new").addEventListener("click", function(){
    players=["circle","cross"];
    activeplayer=0;
    values=[1,1];
    setval=[0,0,0,0,0,0,0,0,0];
    hideImage();
  });
