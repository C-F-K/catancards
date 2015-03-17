// define cards 
var cards =  [
// 1x 2 (good harvest)
    {
        number: "2",
        title: "GOOD HARVEST",
        text: "Each player takes a resource of their choice."
    },
// 2x 3 (1x conflict)
    {
        number: "3",
        title: "CONFLICT",
        text: "The single player with the most played Knight cards (C&K: most active knights) may steal a resource from another player."
    },{
        number: "3",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },
// 3x 4 (2x displace robber)
    {
        number: "4",
        title: "ROBBER RETREATS",
        text: "The robber returns to the desert."
    },{
        number: "4",
        title: "ROBBER RETREATS",
        text: "The robber returns to the desert."
    },{
        number: "4",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },
// 4x 5 (1x trade advantage, 1x tourney)
    {
        number: "5",
        title: "TRADE TREATY",
        text: "The player with the Longest Road card may steal a resource from another player."
    },{
        number: "5",
        title: "TOURNEY",
        text: "The single player with the most played Knight cards (C&K: most active knights) may take a resource of their choice."
    },{
        number: "5",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },{
        number: "5",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },
// 5x 6 (1x epidemic, 1x good neighbors, 1x earthquake)
    {
        number: "6",
        title: "EPIDEMIC",
        text: "Cities that would generate resources this turn only generate half their output (C&K: no commodities)."
    },{
        number: "6",
        title: "GOOD NEIGHBORS",
        text: "Every player chooses one resource (C&K: or commodity) to pass to the player to their left."
    },{
        number: "6",
        title: "EARTHQUAKE",
        text: "Each player turns a road through 90 degrees to indicate damage. Such a road no longer counts towards the Longest Road, and the player may not build any new roads until they pay one wood and one brick to repair it. Villages may still be built at the end of a damaged road."
    },{
        number: "6",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },{
        number: "6",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },
// 6x 7 (robbery)
    {
        number: "7",
        title: "ROBBERY",
        text: "Each player with more than 7 resources (C&K: or commodities) discards half rounded down. The player who drew this card may move the robber and steal a card from a player with a settlement adjacent to its new hex."
    },{
        number: "7",
        title: "ROBBERY",
        text: "Each player with more than 7 resources (C&K: or commodities) discards half rounded down. The player who drew this card may move the robber and steal a card from a player with a settlement adjacent to its new hex."
    },{
        number: "7",
        title: "ROBBERY",
        text: "Each player with more than 7 resources (C&K: or commodities) discards half rounded down. The player who drew this card may move the robber and steal a card from a player with a settlement adjacent to its new hex."
    },{
        number: "7",
        title: "ROBBERY",
        text: "Each player with more than 7 resources (C&K: or commodities) discards half rounded down. The player who drew this card may move the robber and steal a card from a player with a settlement adjacent to its new hex."
    },{
        number: "7",
        title: "ROBBERY",
        text: "Each player with more than 7 resources (C&K: or commodities) discards half rounded down. The player who drew this card may move the robber and steal a card from a player with a settlement adjacent to its new hex."
    },{
        number: "7",
        title: "ROBBERY",
        text: "Each player with more than 7 resources (C&K: or commodities) discards half rounded down. The player who drew this card may move the robber and steal a card from a player with a settlement adjacent to its new hex."
    },
// 5x 8 (1x epidemic)
    {
        number: "8",
        title: "EPIDEMIC",
        text: "Cities that would generate resources this turn only generate half their output (C&K: no commodities)."
    },{
        number: "8",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },{
        number: "8",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },{
        number: "8",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },{
        number: "8",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },
// 4x 9 (1x calm water)
    {
        number: "9",
        title: "CALM WATER",
        text: "The single player with the most settlements adjacent to harbors may take a resource of their choice."
    },{
        number: "9",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },{
        number: "9",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },{
        number: "9",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },
// 3x 10 (1x alms)
    {
        number: "10",
        title: "ALMS",
        text: "The single player with the most Victory Points chooses a card to give a player with the least Victory Points."
    },{
        number: "10",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },{
        number: "10",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },
// 2x 11 (1x alms)
    {
        number: "11",
        title: "ALMS",
        text: "The single player with the most Victory Points chooses a card to give a player with the least Victory Points."
    },{
        number: "11",
        title: "LIFE GOES ON",
        text: "No event this turn."
    },
// 1x 12 (calm water)
    {
        number: "12",
        title: "CALM WATER",
        text: "The player with the most settlements adjacent to harbors may take a resource of their choice."
    }
// 1x new year -> emulated by the subsetter/queue
];

function randIntBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randIndFromArr(arr) {
    return randIntBetween(0,(arr.length - 1));
}

function randomDraw(arr) {
    return arr.splice(randIndFromArr(arr),1)[0];
}

function getDrawDeck(){
    var deck = cards.slice();
    for (var i = 0; i < 5; i++) {
        randomDraw(deck);
    }
    return deck;
}

function renderCard(obj) {
    for (var k in obj) {
        if (k == "number") {
            $("." + k + " p").html(obj[k]);
        } else {
            $("." + k).html(obj[k]);
        }
    }
    $(".number p").css("font-size", function(){
        var num = parseInt(obj.number);
        if (num <= 7) {
            var resultSize = (num * 5) * 2;
        } else {
            var resultSize = ((14 - num) * 5) * 2;
        }
        return resultSize.toString() + "px";
    });
    if (obj.number == "6" || obj.number == "8") {
        $('.number p').css({"color": "red","font-weight": "bold"});
    } else {
        $('.number p').css({"color": "black","font-weight": "normal" });
    } 
}

$(document).ready(function(){
    var drawDeck = getDrawDeck();
    var card = randomDraw(drawDeck);
    renderCard(card);
    $('.draw').on('click',function(){
        if (!drawDeck.length) {
            drawDeck = getDrawDeck();
        }
        var newCard = randomDraw(drawDeck);
        renderCard(newCard);
    });
});
