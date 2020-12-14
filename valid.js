var x=0;
function hide()
{
	var x=document.getElementById("first");
	x.style.display="none";	
	document.getElementById("msg_turn").innerHTML="It's your turn, Select an option";
    var y=document.getElementById("myDiv");
	y.style.display="block";	
    var z=document.getElementById("sum2");
	document.getElementById("sum2").innerHTML="<br><br>  Sum:";
    document.getElementById("sum3").innerHTML="0";	
    document.getElementById('ID').play();
    document.getElementById("sound").style.display="block";
		  	
	}
	

/*-----------------buttons 1-----------*/
	function addition1()
	{
		 if(x>=52)
		 {
			f1.over();
		 }
         x=x+1;
         document.getElementById("sum3").innerHTML=x;
    	 setTimeout(function myturn1(){ 
         document.getElementById("msg_turn").innerHTML="I choose 3, Now your turn";
         x=x+3; 
         document.getElementById("sum3").innerHTML=x;
         if(x==52)
		  {
          f1.end1();
							
		  }
			
         }, 1000);
			
  }

/*-----------------buttons 2-----------*/
    function addition2()
	{
		 if(x>=52)
		 {
	      f1.over();
		 }
         x=x+2;
         document.getElementById("sum3").innerHTML=x;	
         setTimeout(function myturn1(){ 
         document.getElementById("msg_turn").innerHTML="I choose 2, Now your turn";
         x=x+2;
         document.getElementById("sum3").innerHTML=x;
         if(x==52)
		  {
            f1.end1();
							
		  }
			
         }, 1000);
			
    }
			
/*-----------------buttons 3-----------*/
    function addition3()
	{
        if(x>=52)
		 {
          f1.over();
		 }
         x=x+3;
         document.getElementById("sum3").innerHTML=x;
         setTimeout(function myturn1(){ 
         document.getElementById("msg_turn").innerHTML="I choose 1, Now your turn";
         x=x+1;
         document.getElementById("sum3").innerHTML=x;
         if(x==52)
		  {
             f1.end1();
		  }
         }, 1000);
			
   }

/*-----------------button functions-----------*/
var f1={
    over: function end()
    {
         document.getElementById("sum2").innerHTML="<br><br>You lost! Better luck next time";
         document.getElementById("sum3").innerHTML="";
         document.getElementById('ID1').play();
             return f;
    },
    end1: function end1()
    {
         setTimeout(function end1()
        {
         document.getElementById("msg_turn").innerHTML="Game Over";
         document.getElementById("sum2").innerHTML="<br><br>Sum:52<br/>";
         document.getElementById("sum3").innerHTML="";
         document.getElementById("sound").style.display="none";
         setTimeout(function end()
            {
                                  
             document.getElementById("sum2").innerHTML="<br/><br/>You lost!  Better luck next time";
             document.getElementById("sum3").innerHTML="";
             document.getElementById("try_again").style.display="block";
            },2000);
         document.getElementById('ID').pause();
         document.getElementById('ID1').play();
       },2000);
    }
    
  }  
/*---------------validation----------------*/
function valid_name()
{
    
    var reg=/[A-Za-z]$/;
    var data=document.getElementById("fname").value;
    if(reg.test(data)==false)
        {
        document.getElementById("wrong").innerHTML="Please Enter a valid Name";
        }
    else{
        document.getElementById("wrong").innerHTML="";
        }
    
}
function valid_email()
{
var reg= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var data=document.getElementById("mail").value;
    if(reg.test(data)==false)
        {
        document.getElementById("wrong").innerHTML="Please Enter a valid Email";
        }
    else{
        document.getElementById("wrong").innerHTML="";
        }
    
}
/*-------------music control--------------*/
var vol=true;
function soundof()
{
    if(vol==true)
        {
          document.getElementById('ID').pause();
            document.getElementById("icon1").className="fa fa-volume-mute";
            vol=false;
        }
    else
        {
             document.getElementById('ID').play();
            document.getElementById("icon1").className="fa fa-volume-up";
            vol=true;
        }
}