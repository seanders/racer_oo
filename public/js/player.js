function Player(name){
  this.name = name;
  this.position = 1;
}

Player.prototype.advance = function(){
  ++this.position;
};