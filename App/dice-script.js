// VERSION*/
// B&B - Engine.DS.1.0
//

  //DICE FUNCTIONS
      turn = 10
      fail = 0
      function roll_dice(m) {
              var roll = 1 + Math.floor(Math.random()*20)
              document.getElementById("dice").innerHTML = "ROLL VALUE: <br><div class='big_num'>" + roll + "(+" + m + ")</div>";
              turn--
              totroll=roll+m

              if(totroll<=10 && totroll >1)
              {
               document.getElementById("message").innerHTML = "<div class='fail'>FAILURE.</div>";
               fail++
               document.getElementById("fails").innerHTML = "STRIKE:" + fail;
               if(fail==3){
                document.getElementById("message").innerHTML = "<div class='fail'>FAILURE - INJECT!</div>";
                document.getElementById("fails").innerHTML = "STRIKE:" + fail;
               }
              }
              if(totroll>10 && roll!==20)
              {
               document.getElementById("message").innerHTML = "<div class='success'>SUCCESS.</div>";
               fail=0
               document.getElementById("fails").innerHTML = "";
              }
              if(roll==20 || roll == 1 )
              {
               document.getElementById("message").innerHTML = "<div class='inject'>INJECT!.</div>";
               fail=0
               document.getElementById("fails").innerHTML = "";
              }
              /*if(turn<=9) {
                document.getElementById("button3").innerHTML = "<button onClick='addturn()''>Add Extra Turn</button></span>";
              }*/
              if(turn==2) {
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "WARNING";
              }
              if(turn==1) {
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "RED ALERT";
              }
              if(turn==0) {
                document.getElementById("button").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button4").innerHTML = "";
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "<br> GAME OVER! <br> <button onClick='window.location.href=window.location.href'>Refresh Page</button>";
                document.getElementById("fails").innerHTML = "";

              }
              else
              {
                document.getElementById("turn").innerHTML = turn;
              }
        }
      function roll_d20() {
        var roll = 1 + Math.floor(Math.random()*20)
              document.getElementById("d20").innerHTML = "ROLL VALUE: <br><div class='big_num'>" + roll + "</div>";
        }

//TURN FUNCTIONS
      function addturn() {
        turn++;
        document.getElementById("dice").innerHTML = "";
        document.getElementById("message").innerHTML = "TURN ADDED";
        document.getElementById("fails").innerHTML = "";
              if(turn<8) {
                document.getElementById("turn_message").innerHTML = "";
              }
              if(turn==2) {
                document.getElementById("button").innerHTML = "<input type='button' onclick='roll_dice(0)'' value='Roll Dice'/>";
                document.getElementById("button2").innerHTML = "<input type='button' onclick='roll_dice(3)'' value='Roll Dice (+3)'/>";
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "WARNING";
              }
              if(turn==1) {
                document.getElementById("button").innerHTML = "<input type='button' onclick='roll_dice(0)'' value='Roll Dice'/>";
                document.getElementById("button2").innerHTML = "<input type='button' onclick='roll_dice(3)'' value='Roll Dice (+3)'/>";
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "RED ALERT";
              }
              if(turn==0) {
                document.getElementById("button").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button4").innerHTML = "";
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "<br> GAME OVER! <br> <button onClick='window.location.href=window.location.href'>Refresh Page</button>";
                document.getElementById("fails").innerHTML = "";

              }
              else
              {
                document.getElementById("turn").innerHTML = turn;
              }
      }

      function removeturn() {
        turn--;
        document.getElementById("dice").innerHTML = "";
        document.getElementById("message").innerHTML = "TURN ADDED";
        document.getElementById("fails").innerHTML = "";
              if(turn<8) {
                document.getElementById("turn_message").innerHTML = "";
              }
              if(turn==2) {
                document.getElementById("button").innerHTML = "<input type='button' onclick='roll_dice(0)'' value='Roll Dice'/>";
                document.getElementById("button2").innerHTML = "<input type='button' onclick='roll_dice(3)'' value='Roll Dice (+3)'/>";
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "WARNING";
              }
              if(turn==1) {
                document.getElementById("button").innerHTML = "<input type='button' onclick='roll_dice(0)'' value='Roll Dice'/>";
                document.getElementById("button2").innerHTML = "<input type='button' onclick='roll_dice(3)'' value='Roll Dice (+3)'/>";
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "RED ALERT";
              }
              if(turn==0) {
                document.getElementById("button").innerHTML = "";
                document.getElementById("button2").innerHTML = "";
                document.getElementById("button4").innerHTML = "";
                document.getElementById("turn").innerHTML = turn;
                document.getElementById("turn_message").innerHTML = "<br> GAME OVER! <br> <button onClick='window.location.href=window.location.href'>Refresh Page</button>";
                document.getElementById("fails").innerHTML = "";

              }
              else
              {
                document.getElementById("turn").innerHTML = turn;
              }
      }
