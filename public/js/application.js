$(document).ready(function(){

  // $('button').click(function( $(document).bind('keyup') 

  $(document).on('keyup', function(event){
    
    game.onKeyUp(event.which);
    if (!game.gameFinished && game.isThereAWinner()) {
      game.finish();
    }
    // if ($('#player_1 .active').index() === 9) {
    //   $('#player_1 .active').unbind(event);
    //   alert("Player 1 has won!");
    //   $.ajax({
    //     url: '/update',
    //     type: 'PUT',
    //     dataType: "json",
    //     data: {winner: player1_id}
    //   }).always(function(){
    //     $("table").append("<a href='/new_game'>Click here to play again!</a><br><br><a href='/'>Start a new game</a>"
    //       )
    //     ;});
    // }
    // else if ($('#player_2 .active').index() === 9){
    //   $('#player_2 .active').unbind(event);
    //   alert("Player 2 has won!");
    //   $.ajax({
    //     url: '/update',
    //     type: 'PUT',
    //     dataType: "json",
    //     data: {winner: player2_id}
    //   }).always(function(){
    //     $("table").append("<a href='/new_game'>Click here to play again</a><br><br><a href='/'>Start a new game</a>")
    //     ;});
    // }
  });
});