// VERSION*/
// B&B - Engine.CS.1.1
//

function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

function rando() {
        //document.getElementById("dm_solution").innerHTML = "";

        shuffle(proc);
        document.getElementById("output").innerHTML = proc.slice(0, 4).join("");
        document.getElementById("remainder").innerHTML = proc.slice(4, 12).join("");

        shuffle(init);
        document.getElementById("a").innerHTML = init.slice(0,1);
        document.getElementById("dma").innerHTML = init.slice(0,1);

        shuffle(pivot);
        document.getElementById("b").innerHTML = pivot.slice(0,1);
        document.getElementById("dmb").innerHTML = pivot.slice(0,1);

        shuffle(c2);
        document.getElementById("c").innerHTML = c2.slice(0,1);
        document.getElementById("dmc").innerHTML = c2.slice(0,1);

        shuffle(persist);
        document.getElementById("d").innerHTML = persist.slice(0,1);
        document.getElementById("dmd").innerHTML = persist.slice(0,1);

         //add remainders for add-on scenario
        reminit=init.slice();
        reminit.splice(0, 1);

        remc2=c2.slice();
        remc2.splice(0, 1);

        rempivot=pivot.slice();
        rempivot.splice(0, 1);

        rempersist=persist.slice();
        rempersist.splice(0, 1);

        //INJECTS
        //conditions();

        //CONSULTANTS
        //console.log("Consultant Pool (Randomized):");
        shuffle(con);
        //console.log(con);

        clear_addon();
        checkaddon();

}

function randcondition() {

        shuffle(ins);
//INJECTS
        //console.log("Inject Pool:");
        //console.log(ins);
        randins = Object.assign([], ins);

        //console.log("Inject Pool (Randomized):");
        //console.log(randins);

          //set init
        document.getElementById("injectbox").innerHTML = randins.slice(0,1);
        document.getElementById("injectbox").innerHTML += "<button id='clearcon' onclick='clearcondition()'> Clear Starting Condition </button>";
        console.log("Chosen Inject:");
        console.log(randins.slice(0,1));
        randins.shift();

        shuffle(randins);
        console.log("Remaining Pool:");
        console.log(randins);


}

function clearcondition() {
document.getElementById("injectbox").innerHTML = "<button onClick=\"randcondition()\">Random Condition</button> <button onClick=\"customtoggle();boxtoggle('start');buildinjmenu()\">Custom Condition</button>";
randins = Object.assign([], ins);
console.log(randins.length);
}

function clear_addon() {

        clear_ic();
        clear_pe();
        clear_ce();
        clear_per();
}

s = 0
t = 1
function update_ins() {

    document.getElementById("e").innerHTML = randins.slice(s,t);
            s++
            t++
            if (t==randins.length+1)
              {s = 0; t = 1;}
        }

function rem_ins() {
        $.getJSON(cardlist, function(h) {
        $(e).html("<img style='width:200px;' src='"+h.grey+"'>")
        });
    }

//CONSULTANTS

u = 0
v = 1
function update_con() {
    document.getElementById("f").innerHTML = con.slice(u,v);
            u++
            v++
            if (v==con.length+1)
              {u = 0; v = 1;}
        }

function rem_con() {
              document.getElementById("f").innerHTML = "<img style='width:200px;'' src='img/bb-back-consultant.png'>";
        }

IC = 0
PE = 0
CE = 0
PER = 0

        //EXPANSION SCENARIO ADD-ONS SCRIPTS
        function addIC() {
            IC++
              document.getElementById("addIC").innerHTML += "<div class=\"cards__single_"+IC+"\" id=\"ic_"+IC+"\"><div class=\"cards__front\"><img src=\"img/bb-back-init.png\"></div><div class=\"cards__back\"><div class=\"init\" id=\"w"+IC+"\">"+init.slice(IC,IC+1);+"</div></div></div>"
              document.getElementById("w"+IC).innerHTML = reminit.slice(IC,IC+1);
              if (IC == 2) {
              buttIC.style.display = "none";
              clearIC.style.display = "inline";
             }
             document.getElementById("solIC").innerHTML += reminit.slice(IC,IC+1);
             const addtrigger = document.querySelectorAll('[id^="ic_"]');
             addtrigger.forEach((xc) =>  {

             if(xc.getAttribute("state")!=="flipped")
	            {
                    xc.addEventListener("click", flipCard);
                }
             });

        }
        function addPE() {
            PE++
              document.getElementById("addPE").innerHTML += "<div class=\"cards__single_"+PE+"\" id=\"pe_"+PE+"\"><div class=\"cards__front\"><img src=\"img/bb-back-pivot.png\"></div><div class=\"cards__back\"><div class=\"init\" id=\"x"+PE+"\">"+pivot.slice(PE,PE+1);+"</div></div></div>"
              document.getElementById("x"+PE).innerHTML = rempivot.slice(PE,PE+1);
              if (PE == 2) {
              buttPE.style.display = "none";
              clearPE.style.display = "inline";
             }
              document.getElementById("solPE").innerHTML += rempivot.slice(PE,PE+1);
              const addtrigger = document.querySelectorAll('[id^="pe_"]');
              addtrigger.forEach((xc) =>  {

             if(xc.getAttribute("state")!=="flipped")
	            {
                    xc.addEventListener("click", flipCard);
                }
             });
        }
        function addCE() {
            CE++
              document.getElementById("addCE").innerHTML += "<div class=\"cards__single_"+CE+"\" id=\"ce_"+CE+"\"><div class=\"cards__front\"><img src=\"img/bb-back-c2.png\"></div><div class=\"cards__back\"><div class=\"init\" id=\"y"+CE+"\">"+c2.slice(CE,CE+1);+"</div></div></div>"
              document.getElementById("y"+CE).innerHTML = remc2.slice(CE,CE+1);
              if (CE == 2) {
              buttCE.style.display = "none";
              clearCE.style.display = "inline";
             }
              document.getElementById("solCE").innerHTML += remc2.slice(CE,CE+1);
              const addtrigger = document.querySelectorAll('[id^="ce_"]');
              addtrigger.forEach((xc) =>  {

             if(xc.getAttribute("state")!=="flipped")
	            {
                    xc.addEventListener("click", flipCard);
                }
             });
        }
        function addPER() {
            PER++
              document.getElementById("addPER").innerHTML += "<div class=\"cards__single_"+PER+"\" id=\"per_"+PER+"\"><div class=\"cards__front\"><img src=\"img/bb-back-persist.png\"></div><div class=\"cards__back\"><div class=\"init\" id=\"z"+PER+"\">"+persist.slice(PER,PER+1);+"</div></div></div>"
              document.getElementById("z"+PER).innerHTML = rempersist.slice(PER,PER+1);
              if (PER == 2) {
              buttPER.style.display = "none";
              clearPER.style.display = "inline";
             }
              document.getElementById("solPER").innerHTML += rempersist.slice(PER,PER+1);
              const addtrigger = document.querySelectorAll('[id^="per_"]');
              addtrigger.forEach((xc) =>  {

             if(xc.getAttribute("state")!=="flipped")
	            {
                    xc.addEventListener("click", flipCard);
                }
             });
        }

//PREPARE DECK

var cardlist;

var proc = []
var init = []
var pivot = []
var c2 = []
var persist = []
var ins = []
//CONSULTANTS
var con = []



$(document).ready(function() {

// Determine Deck Selection
loaddeck();

//GetVersion
  $.getJSON(cardlist, function(h) {
        $(version).append(h.title);
        $(date).append(h.revdate);
        });


 //BUILD LISTS
 cardtype = ["proc", "init", "pivot", "c2", "persist", "ins", "con"];
 cardtype.forEach(buildlist);

  function buildlist(item, i) {
    $.getJSON(cardlist, function(h) {
      $.each(h.data, function(i, x) {

            if (item=="proc" && x.type=="procedure") {
                c ="procimg"
                if (x.details==null){
                     li = "<div class='"+item+"' id='"+x.id+"'><a href='"+x.image+"' data-lightbox='procedure"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a></div>"
                   } else {
                     li = "<div class='"+item+"' id='"+x.id+"'><a href='"+x.image+"' data-lightbox='procedure"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a></div>"
                   }
                proc.push(li);
               }
            if (item=="ins" && x.type=="inject") {
                c="inject"
                if (x.details==null){
                     li = "<div class='"+c+"'><a href='"+x.image+"' data-lightbox='inject"+x.id+"'><img src='"+x.image+"'></a></div>"
                   } else {
                     li = "<div class='"+c+"'><a href='"+x.image+"' data-lightbox='inject"+x.id+"' data-title='"+x.details+"'><img src='"+x.image+"'></a></div>"
                   }
                ins.push(li)
                randins = shuffle(ins)
                }
            if (item=="init" && x.type=="initial") {
                c="scenimg"
                if (x.details==null){
                     li = "<a href='"+x.image+"' data-lightbox='initial"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a>"
                   } else {
                     li = "<a href='"+x.image+"' data-lightbox='initial"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a>"
                   }
                init.push(li)
                }
            if (item=="pivot" && x.type=="pivot") {
                c="scenimg"
                if (x.details==null){
                     li = "<a href='"+x.image+"' data-lightbox='pivot"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a>"
                   } else {
                     li = "<a href='"+x.image+"' data-lightbox='pivot"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a>"
                   }
                pivot.push(li)
                }
            if (item=="c2" && x.type=="c2") {
                c="scenimg"
                if (x.details==null){
                     li = "<a href='"+x.image+"' data-lightbox='c2"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a>"
                   } else {
                     li = "<a href='"+x.image+"' data-lightbox='c2"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a>"
                   }
                c2.push(li)
                }
            if (item=="persist" && x.type=="persist") {
                c="scenimg"
                if (x.details==null){
                    li = "<a href='"+x.image+"' data-lightbox='persist"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a>"
                  } else {
                    li = "<a href='"+x.image+"' data-lightbox='persist"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a>"
                  }
                persist.push(li)
                }
            //CONSULTANTS
            if (item=="con" && x.type=="consultant") {
                c="consultant"
                if (x.details==null){
                     li = "<div class='"+c+"'><a href='"+x.image+"' data-lightbox='inject"+x.id+"'><img src='"+x.image+"'></a></div>"
                   } else {
                     li = "<div class='"+c+"'><a href='"+x.image+"' data-lightbox='inject"+x.id+"' data-title='"+x.details+"'><img src='"+x.image+"'></a></div>"
                   }
                con.push(li)
                shuffle(con);
                }

            });
        });
    }
});

//DEBUG CARD POOL:
/*
console.log(proc);
console.log(ins);
console.log(init);
console.log(persist);
console.log(c2);
console.log(pivot);
//CONSULTANTS
console.log(con);
*/




