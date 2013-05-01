function Game(player1, player2){
  this.gameId = null;
  this.winner = null;
  this.startTime = null;
  this.player1 = player1;
  this.player2 = player2;
  this.gameStarted = false;
  this.gameFinished = false;
  this.boardSize = $('#player_1').children().size();
  this.winTime = null;
};

Game.prototype = {
  onKeyUp: function(code) {
    if (!this.gameFinished && (code == 32)) { //32 = spacbar
      this.start(); 
    }
    else if (!this.gameStarted && (code == 82)) { //r
      this.reset();
    }
    else if (this.gameStarted) {
      if (code == 81) { //q
        player1.advance();
      }

      else if (code == 80){ //p
        player2.advance();
      }
      this.render();
    }
  },

  start: function() {
    this.startTime = this.currentTime();
    this.gameStarted = true;
    this.gameFinished = false;
  },

  finish: function(event){
    this.gameStarted = false;
    this.gameFinished = true;
    this.winTime = this.currentTime() - this.startTime;
    if (this.player1.position == this.boardSize) {
      this.winner = this.player1.name;
    }
    else {
      this.winner = this.player2.name;
    }
    $('#win_time').html('You won in ' + this.winTime);
    $.ajax({
        url: '/update',
        type: 'PUT',
        dataType: "json",
        data: {winner: this.winner, winning_time: this.winTime}
    });
  },

  currentTime: function(){
    var currentDate = new Date();
    return (currentDate.getTime()/1000);
  },

  isThereAWinner: function() {
    return (this.player1.position == this.boardSize) || (this.player2.position == this.boardSize); 
  },

  reset: function() {
    this.gameFinished =  false;
    $('#win_time').html('');
    this.player1.position = 1;
    this.player2.position = 1;
    this.render();
    // $(document).bind('keyup');
  },

  render: function (){
    $('#player_1 .active').removeClass('active');
    $('#player_1 td:nth-child(' + this.player1.position + ')').addClass('active');
    $('#player_2 .active').removeClass('active');
    $('#player_2 td:nth-child(' + this.player2.position + ')').addClass('active');
  }

};