# Use this guide to add new and/or custom decklists. 
- Applies to Engine-V1, Engine-V1-Expansion
- Prerequisites:  This process assumes you have the following...
  - Card Image Files (typically in PNG, at a 3.5x2.5 ratio)
  - Card MetaData (some cards have links and notes)
  - Comfort editingJSON +  HTML + JavaScript

# Folder Structure
- At the moment, decks are isolated into the directory: `<root>/App/decks/<deckfolder>/`
- Within this folder, we add the RAW card files (e.g. `BNB_CARDS_CE-1.png`); the production numbering scheme is your preference, but it is easier to keep track of them if they are consecutive in nature.

# Create the carddb.json file
- Clone or create a carddb.json file that follows the template provided at `<root>/App/decks/carddb-template.json`
- Take note of the special key-value pairs that are used throughout the application:
```
{
  "title": "DECK NAME",
  "revdate": "08-01-2021",
  "link": "",
  "data": [
    {
      "name": "CARDNAME",
      "image": "decks/DECKNAME/CARDFILE.png",
      "type": "initial",
      "id": "001",
      "details": "<li><a target=\"_blank\" href=\"URL\"></a></li>"
    }
  ],
  "red": "img/bb-back-init.png",
  "yellow": "img/bb-back-pivot.png",
  "brown": "img/bb-back-c2.png",
  "purple": "img/bb-back-persist.png",
  "grey":   "img/bb-back-inject.png",
  "green":  "",
  "logo":   ""
}
```
- NOTE: the `type` attribute, the following values are accepted here: `initial`,`pivot`,`persist`,`c2`,`procedure`,`consultant`,`inject`; these are used by the UI builder and card scripts to create the randomized pools which the random and draw functions operate. Engine-V1 does NOT currently do anything with the consultant type.
- NOTE: the `details` attribute must be VALID JSON, so things like double-quotes must be properly escaped. This is used by the light-box plugin to create links for cards when they are in "lighbox mode"--- it is relatively forgiving re: HTML, but try not to put anything too complicated here-- links `<a>` and lists `<li>`
- NOTE: `link` and `logo` are used to attribute any partner or sponsors involved with the creation of the deck edition. This will be used to create a banner at the bottom of the application when the deck is chosen.

# Add Deck to UI:
To add a deck to the UI, once the carddb.json has been created:
- Modify `<root>/App/index.html/`:
- Look for a form element with `id="myForm` (usually at the top)
```
<div class="form-popup" id="myForm">
        <form class="form-container" onsubmit="updatedeck(deck.value);">
            Available Decks: <br>
            <input type="radio" id="corev1" name="deck" value="CoreV1" ><label for="corev1">CoreV1</label><br>
            <input type="radio" id="corev21" name="deck" value="CoreV21" ><label for="corev21">CoreV2.1</label><br>
            <input type="radio" id="icsotV1" name="deck" value="ICSOT" ><label for="icsotV1">ICS/OTv1</label><br>
            <br>
        <button type="submit" class="btn" >Submit</button>
        <button type="button" class="btn cancel" onclick="closedeckselector()">Close Deck Selector</button>
        </form>
</div>
```
- Add a line similar to: `<input type="radio" id="mydeck-id" name="deck" value="MYDECK-VALUE" ><label for="mydeck-ID">MY DECK NAME</label><br>`
- Replace "MYDECK", "mydeck-id", etc. with your deck.

As you can see, the form launches the `updatedeck()` function, so next, we must add our deck to this list.

# Add Deck to UPDATE function:
- Modify `<root>/App/deck-script.html/`
- NOTE: The secret here is `updatedeck()` takes the chosen deck from the HTML form and stores the value as a local (browser) variable, then calls the `loaddeck()` function to select the appropriate carddb.json file. 
- Look for the `loaddeck()` function (should be at the bottom)
- Look for a series of switch statements like so:
```
    if (selecteddeck == 'CoreV1'){
        cardlist = 'decks/CoreV1/carddb.json'
        }
    if (selecteddeck == 'CoreV21'){
        cardlist = 'decks/CoreV2.1/carddb.json'
        }
    if (selecteddeck == 'ICSOT'){
        cardlist = 'decks/ICS-OT/carddb.json'
        }
```
- Add your own switch akin to:
```
if (selecteddeck == 'MYDECK-VALUE'){
        cardlist = 'decks/DECKNAME/carddb.json'
        }
```

And that's it...