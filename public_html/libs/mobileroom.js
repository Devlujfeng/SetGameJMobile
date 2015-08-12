var mi = 1;
$(function(){


$.getJSON("http://10.10.3.73:8080/SetGames/mobile").done(function(result){
   var t = JSON.stringify(result); 
    console.log(t);
    var m = JSON.parse(t);
    console.log(m[0].CardNumber);
    for(var i =0; i<m.length; i++){   
        document.getElementById("p"+i).setAttribute("src","libs/images/"+m[i].CardNumber+".gif");
    }

});


   $("#hint").on("click",function(){
          
       console.log("getin");
      $.getJSON("http://10.10.3.73:8080/SetGames/mobilehint").done(function(result){
          var t = JSON.parse(JSON.stringify(result));
          console.log(t['hint1']);
          console.log(t['hint2']);
          console.log(t['hint3']);
          if(mi===1){
          document.getElementById("hint").setAttribute("data-img0","libs/images/"+t['hint1']+".gif");
          document.getElementById("hint").setAttribute("data-img1","libs/images/"+t['hint2']+".gif");
          document.getElementById("hint").setAttribute("data-img2","libs/images/"+t['hint3']+".gif");
            $('a[rel=popover]').popover({
                    
                        html: true,
                        trigger: 'click',
                        content: function () {return '<img id="img0" class="resultdemo2" src="'+$("#hint").data('img0') + '" /><img id="img1" class="resultdemo2" src="'+$("#hint").data('img1') + '" /><img id="img2" class="resultdemo2" src="'+$("#hint").data('img2') + '" />';}
                       
          });
                    console.log("will you go again??"); 
                    console.log("get in if??"+ mi);
                    mi++;
                }       
           else{
               console.log("get in else??");
          document.getElementById("img0").setAttribute("src","libs/images/"+t['hint1']+".gif");
          document.getElementById("img1").setAttribute("src","libs/images/"+t['hint2']+".gif");
          document.getElementById("img2").setAttribute("src","libs/images/"+t['hint3']+".gif");
            $('a[rel=popover]').popover({
                        html: true,
                        trigger: 'click',
                        content: function () {return '<img id="img0" class="resultdemo2" src="'+$("#hint").data('img0') + '" /><img id="img1" class="resultdemo2" src="'+$("#hint").data('img1') + '" /><img id="img2" class="resultdemo2" src="'+$("#hint").data('img2') + '" />';}                      
          });
                mi++;
           }          
  });

      });
           


$("#submit").on("click",function(){
           
          var chk_value =[]; 
          $('input[name="choice"]:checked').each(function(){  
           chk_value.push($(this).val());  
          });  
          
           console.log(chk_value.length);
          if(chk_value.length<3){
              
              alert("Please select at least 3 cards");
          }
          else if(chk_value.length>3){
              alert("you can not select more than 3 cards");
          }
          
          else{
             document.getElementById("a").value=chk_value[0];
             document.getElementById("b").value=chk_value[1];
             document.getElementById("c").value=chk_value[2]; 
             console.log("checkbox emilinate?");
         
            $.get('http://10.10.3.73:8080/SetGames/mobilesend',{
                   card1: $("#a").val(),
                   card2: $("#b").val(),
                   card3: $("#c").val()
            }).done(function(result){
                  //// 待定 document.getElementById("flag").textContent = "This is not a set, Try Again.";
                  console.log("checkbox test");
                  var t = JSON.stringify(result);
                  console.log(t);
                  var m = JSON.parse(t);
                  var x = JSON.parse(m);
                  console.log(x[0].cardsult);
                for(var i=0; i< 12 ; i++){   //////备注
                    document.getElementById("p"+i).setAttribute("style","");
                    document.getElementById("chkbx"+i).checked = false;
                }

                if(x[0].cardsult === "0"){
                document.getElementById("flag").textContent = "Not a set , Try again.";


            }
                else{
                    for(var i=0; i<12; i++){ ////备注
                    document.getElementById("p"+i).setAttribute("src","libs/images/"+x[i].cardsult+".gif");
                    document.getElementById("flag").textContent = "Cool, you got one.";
                }
                }

    });}
});





























 $("#p0").on("click",function(){

     if(document.getElementById("chkbx0").checked === true){
        document.getElementById("p0").setAttribute("style",""); 
        document.getElementById("chkbx0").checked = false;
     }
     else{
         document.getElementById("p0").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx0").checked = true;  
     }
 });   
 
 
  $("#p1").on("click",function(){

     if(document.getElementById("chkbx1").checked === true){
        document.getElementById("p1").setAttribute("style",""); 
        document.getElementById("chkbx1").checked = false;
     }
     else{
         document.getElementById("p1").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx1").checked = true;  
     }
 });
 
 
 
  
 
  $("#p2").on("click",function(){

     if(document.getElementById("chkbx2").checked === true){
        document.getElementById("p2").setAttribute("style",""); 
        document.getElementById("chkbx2").checked = false;
     }
     else{
         document.getElementById("p2").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx2").checked = true;  
     }
 });
 
 
 
  
 
  $("#p3").on("click",function(){

     if(document.getElementById("chkbx3").checked === true){
        document.getElementById("p3").setAttribute("style",""); 
        document.getElementById("chkbx3").checked = false;
     }
     else{
         document.getElementById("p3").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx3").checked = true;  
     }
 });
 
 
 
  
 
  $("#p4").on("click",function(){

     if(document.getElementById("chkbx4").checked === true){
        document.getElementById("p4").setAttribute("style",""); 
        document.getElementById("chkbx4").checked = false;
     }
     else{
         document.getElementById("p4").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx4").checked = true;  
     }
 });
 
 
 
  
 
  $("#p5").on("click",function(){

     if(document.getElementById("chkbx5").checked === true){
        document.getElementById("p5").setAttribute("style",""); 
        document.getElementById("chkbx5").checked = false;
     }
     else{
         document.getElementById("p5").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx5").checked = true;  
     }
 });
 
 
 
  
 
  $("#p6").on("click",function(){

     if(document.getElementById("chkbx6").checked === true){
        document.getElementById("p6").setAttribute("style",""); 
        document.getElementById("chkbx6").checked = false;
     }
     else{
         document.getElementById("p6").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx6").checked = true;  
     }
 });
 
 
 
  
 
  $("#p7").on("click",function(){

     if(document.getElementById("chkbx7").checked === true){
        document.getElementById("p7").setAttribute("style",""); 
        document.getElementById("chkbx7").checked = false;
     }
     else{
         document.getElementById("p7").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx7").checked = true;  
     }
 });
 
 
 
  
 
  $("#p8").on("click",function(){

     if(document.getElementById("chkbx8").checked === true){
        document.getElementById("p8").setAttribute("style",""); 
        document.getElementById("chkbx8").checked = false;
     }
     else{
         document.getElementById("p8").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx8").checked = true;  
     }
 });
 
 
 
  
 
  $("#p9").on("click",function(){

     if(document.getElementById("chkbx9").checked === true){
        document.getElementById("p9").setAttribute("style",""); 
        document.getElementById("chkbx9").checked = false;
     }
     else{
         document.getElementById("p9").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx9").checked = true;  
     }
 });
 
 
 
  
 
  $("#p10").on("click",function(){

     if(document.getElementById("chkbx10").checked === true){
        document.getElementById("p10").setAttribute("style",""); 
        document.getElementById("chkbx10").checked = false;
     }
     else{
         document.getElementById("p10").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx10").checked = true;  
     }
 });
 
 
 
  
 
  $("#p11").on("click",function(){

     if(document.getElementById("chkbx11").checked === true){
        document.getElementById("p11").setAttribute("style",""); 
        document.getElementById("chkbx11").checked = false;
     }
     else{
         document.getElementById("p11").setAttribute("style","border: 3px solid red"); 
        document.getElementById("chkbx11").checked = true;  
     }
 });
 
 
 
 
 
 
 
});



