// VERSION*/
// B&B - Engine.CS.1.0
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

var cardlist;

var proc = []
var init = []
var pivot = []
var c2 = []
var persist = []
var ins = []



$(document).ready(function() {

// Determine Deck Selection
loaddeck();

//GetVersion
  $.getJSON(cardlist, function(h) {
        $(version).append(h.title);
        $(date).append(h.revdate);
        });


 //BUILD LISTS
 cardtype = ["proc", "init", "pivot", "c2", "persist", "ins"];
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
*/




