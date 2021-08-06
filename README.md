
<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/App/img/bb-logo.png" width="500px"
     alt="BackDoors & Breaches"
     style="float: left; margin-right: 10px;" />

# B&B-Shuffle
Dashboard for conducting [Backdoors & Breaches](https://www.blackhillsinfosec.com/projects/backdoorsandbreaches/) sessions over Zoom.

Backdoors & Breaches is the property of [Black Hills InfoSec](https://www.blackhillsinfosec.com/). It is a great tool for conducting incident response walkthroughs and training seminars.

# Version 2.0 Updates
- View [Changelog](https://github.com/p3hndrx/B-B-Shuffle/blob/V2/ChangeLog.md)

# Version 2.1 Updates
- Updated [Cardlist](https://docs.google.com/spreadsheets/d/1RNBFr4o9OPYWwR7mxdadHQwxRayylZewcphdS3K6-og/edit#gid=0)

# About This Script
This is a simple HTML page, best viewed at 1920x1080.

Consists of HTML, CSS, and JS to control basic behaviors.

## Features:
- Dice Roll
- Card Shuffle
- Injects
- Floating Counters

# How it Works
When you reload the page, you will get:
- 4x Scenario Cards (Top)
- 4x Randomly Assigned Established Procedures (2nd Row)
- 6x Randomly Assigned Remaining Procedures

There will be a dice box at the bottom, an Inject card dealer, and 3x stacked tokens for marking.
As the DM, you will get the solution to the Scenario (popup at bottom right).

<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/Screenshots/dashboard.png" width="900px"
     alt="Dashboard"
     style="float: left; margin-right: 10px;" />

## NOTES: 
- Once you click the scenario card to reveal, you cannot flip it back.
- To facilitate narration and pre-staging the game, the DM can choose to reveal the solution:

<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/Screenshots/dm-only.png" width="700px"
     alt="Dashboard"
     style="float: left; margin-right: 10px;" />

- There are 2 buttons for rolling Established Procedures and Other Procedures (respectively)
  - The totals and success/failure of the Dice Roll is calculated in the Game Progress box

<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/Screenshots/roll.png" width="500px"
     alt="Dashboard"
     style="float: left; margin-right: 10px;" />

- Click DRAW INJECT to draw an inject card, CLEAR is self-explanatory

<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/Screenshots/inject2.png" width="250px"
     alt="Dashboard"
     style="float: left; margin-right: 10px;" />
<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/Screenshots/inject1.png" width="250px"
     alt="Dashboard"
     style="float: left; margin-right: 10px;" />

- All cards activate the lightbox.

<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/Screenshots/card-display.png" width="500px"
     alt="Dashboard"
     style="float: left; margin-right: 10px;" />

- Chips can be dragged onto procedure cards to denote they are deactivated for x # of turns

<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/Screenshots/chips.png" width="500px"
     alt="Dashboard"
     style="float: left; margin-right: 10px;" />

## CardList
- via Google Sheets - [Card List](https://docs.google.com/spreadsheets/d/1RNBFr4o9OPYWwR7mxdadHQwxRayylZewcphdS3K6-og/edit?usp=sharing)

## Scripts/Snippets/Tutorials Referenced
- [Flip Cards with Javascript](https://www.ricardomoreira.io/blog/2020-06-15-flip-cards-with-javascript/) by Ricardo Moreira
- [How to Create a Draggable Div](https://www.w3schools.com/howto/howto_js_draggable.asp) by W3Schools
- [How to Randomize (shuffle) a Javascript Array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) via Stackoverflow
- [Lightbox](https://lokeshdhakar.com/projects/lightbox2/) by Lokesh Dhakar. (+[JQuery](https://jquery.com/))
- [Google Fonts](https://fonts.google.com/)
- And of course, the great folks over at [Black Hills InfoSec](https://www.blackhillsinfosec.com/) for the art assets.

<img src="https://github.com/p3hndrx/B-B-Shuffle/blob/main/App/img/blackhills-logo.png" width="200px"
     alt="Black Hills InfoSec"
     style="float: left; margin-right: 10px;" />
