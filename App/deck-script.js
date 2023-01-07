// VERSION*/
// B&B - Engine.DSa.1.0
//

//UI Elements
function opendeckselector() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("deckselectoropen").style.display = "none";
}

function closedeckselector() {
  document.getElementById("myForm").style.display = "none";
    document.getElementById("deckselectoropen").style.display = "block";
}

function updatedeck(choice) {
        deck = choice;
        localStorage.setItem("deckKey", deck);
        //console.log(deck);
        loaddeck();
}

var selecteddeck;

//DECK LOADER
function loaddeck() {

selecteddeck = localStorage.getItem("deckKey");
console.log(selecteddeck);

    if (selecteddeck == 'CoreV1'){
        cardlist = 'decks/CoreV1/carddb.json'
        }
    if (selecteddeck == 'CoreV21'){
        cardlist = 'decks/CoreV2.1/carddb.json'
        }
    if (selecteddeck == 'ICSOT'){
        cardlist = 'decks/ICS-OT/carddb.json'
        }

        $.getJSON(cardlist, function(h) {
            $(a).html("<img class='full' src='"+h.red+"'>");
            $(b).html("<img class='full' src='"+h.yellow+"'>");
            $(c).html("<img class='full' src='"+h.brown+"'>");
            $(d).html("<img class='full' src='"+h.purple+"'>");

            $(inita).html("<img src='"+h.red+"'>");
            $(initb).html("<img src='"+h.yellow+"'>");
            $(initc).html("<img src='"+h.brown+"'>");
            $(initd).html("<img src='"+h.purple+"'>");

            $(e).html("<img style='width:200px;' src='"+h.grey+"'>")

            //update logo
            $(copyright).html("<a target='_blank' href='https://www.blackhillsinfosec.com/projects/backdoorsandbreaches'><div id='bb'></div></a><a target='_blank' href='https://www.blackhillsinfosec.com/'><div id='bh'></div></a><a target='_blank' href='"+h.link+"'><div class='sponsor' style=' background-image: url("+h.logo+");'></div></a>");
        });

console.log(cardlist)

}
