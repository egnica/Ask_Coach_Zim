
function questions(){
    //defined the function as questions. each array has 3 quotes
    var answer = [
        ["I do feel like he has room for improvment...", "I feel like the fanbase is making too much of that situation.", "It seems to me you havent done your research on that...."],
        ["That player is total garbage!", "Are you really asking me that? Do you watch the games?", "All I can say is that we are not worried about him at this time...."],
        ["I truly believe we need to blame De Filippo for those mishapps", "The team just needs more time to gel", "We are just trying to make the playoffs here...."],
        ["Well, you gotta respect their defence", "Well, if you want to crown them then go ahead!", "Absolutely no comment on that..."]
        ];
    var radioSelect = document.getElementsByClassName('rbutton');
   //established all of the quotes in a array to the varible answer that are set my the radio buttons
  
    for(var x = 0; x < radioSelect.length; x++){
        //goes thru the array starting at 0 and going thu until the array ends as set by the radio buttons.
        if(radioSelect[x].checked){
            console.log(radioSelect[x]);
            var randomSayin = answer[x][Math.floor(Math.random() * 3)];
            document.getElementById('something').innerHTML = randomSayin;
        // the math.random pickes the responce at random within the 3 that are available per array. Responces are them put into the somethin div with .innerHTML
        }
    }
}