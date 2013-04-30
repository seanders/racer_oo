function move_player(player)
{
  console.log("entering move_player");
  var current_position = "#" + player + " .active";
  console.log(current_position);
  $(current_position).next().addClass("active");
  $(current_position).first().removeClass("active");
}

$(document).ready(function(){
  $(document).on('keyup', function(event){
    var code = event.which;
    if ($('#player_1 .active').index() === 9) {
      $('#player_1 .active').unbind(event);
      alert("Player 1 has won!");
      $.ajax({
        url: '/update',
        type: 'PUT',
        dataType: "json",
        data: {winner: player1_id}
      }).always(function(){
        $("table").append("<a href='/new_game'>Click here to play again!</a><br><br><a href='/'>Start a new game</a>"
          )
        ;});
    }
    else if ($('#player_2 .active').index() === 9){
      $('#player_2 .active').unbind(event);
      alert("Player 2 has won!");
      $.ajax({
        url: '/update',
        type: 'PUT',
        dataType: "json",
        data: {winner: player2_id}
      }).always(function(){
        $("table").append("<a href='/new_game'>Click here to play again</a><br><br><a href='/'>Start a new game</a>")
        ;});
    }
    else if (code === 81){
      move_player("player_1");
    }
    else if (code === 80){
      move_player("player_2");
    }
  });
});
//