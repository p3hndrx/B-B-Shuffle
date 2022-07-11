//TOGGLE FUNCTIONS
remprocs = Object.assign([], proc);
function customtoggle() {
  var x = document.getElementById("builder");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

menus = ["ic","pv","c2","ps","proc","start"]

function boxtoggle(a) {
  menus.forEach(function(b, i){
  if(b!=a){
    var x = document.getElementById(b);
    x.style.display = "none";
  }else{

  var x = document.getElementById(a);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  }
 });
}




//Card Selectors
function buildprocmenu(){
    if (remprocs.length==0){remprocs = Object.assign([], proc);}
    console.log("Procedure List:");
    console.log(remprocs);

    //Card Selectors
    document.getElementById("proc").innerHTML = "";
    remprocs.forEach(buildselector);

    function buildselector(card, i){
        //console.log(i)
        cardtile = card

        //change style to fit box
        cardtile = cardtile.replace("'procimg'", "'procimgbuild'");
        cardtile = cardtile.replace("<a ","<a onclick='return false;' ")
        cardtile = cardtile.replace("data-lightbox","data")

        //console.log(card)
        //create containing div
        cdv = "<div id='proc_"+i+"' onclick='chooseproc(this.id, this);'>"+cardtile+"</div>"
        document.getElementById("proc").innerHTML += cdv;
    };
}

function buildscenemenu(s){

    //Card Selectors
    document.getElementById(s).innerHTML = "";

    if (s=='ic'){ init.forEach(buildselector); }
    if (s=='pv'){ pivot.forEach(buildselector); }
    if (s=='c2'){ c2.forEach(buildselector); }
    if (s=='ps'){ persist.forEach(buildselector); }


    function buildselector(card, i){
        //console.log(i)
        cardtile = card


        //change style to fit box
        cardtile = cardtile.replace("'scenimg'", "'scenimgbuild'");
        cardtile = cardtile.replace("<a ","<a onclick='return false;' ")
        cardtile = cardtile.replace("data-lightbox","data")

        //console.log(card)
        //create containing div
        cdv = "<div id='"+s+"_"+i+"' onclick='choose(this.id, this);'>"+cardtile+"</div>"
        document.getElementById(s).innerHTML += cdv;
    };
}

function buildinjmenu(){

    //Card Selectors
    document.getElementById("start").innerHTML = "";
    ins.forEach(buildselector);

    function buildselector(card, i){
        //console.log(i)
        cardtile = card


        //change style to fit box
        cardtile = cardtile.replace("<a ","<a onclick='return false;' ")
        cardtile = cardtile.replace("data-lightbox","data")

        //console.log(card)
        //create containing div
        cdv = "<div id='inj_"+i+"' onclick='chooseinj(this.id, this);'>"+cardtile+"</div>"
        document.getElementById("start").innerHTML += cdv;
    };
}

function choose(id,contents) {
    console.log(id);

    //fix lightbox and formatting
    card = contents.innerHTML;
    swap = card.replace("scenimgbuild", "scenimg");
    swap = swap.replace("return false;","")
    swap = swap.replace("data","data-lightbox")
    console.log(swap);

    if (id.includes("ic")) {
        document.getElementById("a").innerHTML = swap;
        document.getElementById("dma").innerHTML = swap;
        //boxtoggle('ic');
    }
    if (id.includes("pv")) {
        document.getElementById("b").innerHTML = swap;
        document.getElementById("dmb").innerHTML = swap;
        //boxtoggle('pv');
    }
    if (id.includes("c2")) {
        document.getElementById("c").innerHTML = swap;
        document.getElementById("dmc").innerHTML = swap;
        //boxtoggle('c2');
    }
    if (id.includes("ps")) {
        document.getElementById("d").innerHTML = swap;
        document.getElementById("dmd").innerHTML = swap;
        //boxtoggle('ps');
    }
return false;
}

function chooseinj(id,contents) {
    console.log(id);

    //fix lightbox and formatting
    card = contents.innerHTML;
    swap = card.replace("scenimgbuild", "scenimg");
    swap = swap.replace("return false;","")
    swap = swap.replace("data","data-lightbox")
    //console.log(swap);

    document.getElementById("injectbox").innerHTML = swap;

    console.clear();
    randins = Object.assign([], ins);
    idx = id.replace("inj_","")
    console.log(idx)

    console.log("Inject Pool:");
    console.log(ins);

    console.log("Chosen Inject:");
    console.log(randins[idx]);

    console.log("Remaining Inject:");
    randins.splice(idx, 1);
    console.log(randins);

    shuffle(randins);
    //boxtoggle('start');

return false;
}

chosenprocs=[]
function chooseproc(id,contents) {
    console.log(id);

    //fix lightbox and formatting
    card = contents.innerHTML;
    swap = card.replace("scenimgbuild", "scenimg");
    swap = swap.replace("return false;","")
    swap = swap.replace("data","data-lightbox")
    console.log(swap);

    //document.getElementById("injectbox").innerHTML = swap;

    console.clear();
    idx = id.replace("proc_","")
    console.log(idx)

    console.log("Proc Pool:");
    console.log(remprocs);

    console.log("Selected Proc:");
    console.log(remprocs[idx]);

    if (chosenprocs.length <= 4)
    {
        console.clear();
        console.log("Chosen Procedures:");
        chosenprocs.push(remprocs[idx]);
        console.log(chosenprocs);

        console.log("Remaining Procedures:");
        remprocs.splice(idx, 1);
        console.log(remprocs);

        document.getElementById("output").innerHTML = chosenprocs.join("");
        document.getElementById("remainder").innerHTML = remprocs.join("");
        //boxtoggle('proc');
    }
    if (chosenprocs.length >4)
    {
        console.clear();
        console.log("Resetting Procedures")
        remprocs = Object.assign([], proc);
        chosenprocs=[]

        console.log("Chosen Procedures:");
        //chosenprocs.push(proc[idx]);
        console.log(chosenprocs);

        document.getElementById("output").innerHTML = chosenprocs.join("");
        document.getElementById("remainder").innerHTML = remprocs.join("");
    }
    buildprocmenu();

return false;
}