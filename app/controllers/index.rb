get '/' do
  # Look in app/views/index.erb

  erb :index
end

post '/game' do
  session.clear
  @player1 = Player.where(name: params[:name1]).first_or_create
  @player2 = Player.where(name: params[:name2]).first_or_create
  session[:first_player] = @player1.id
  session[:second_player] = @player2.id
  @game = Game.create()
  @game.players << @player1
  @game.players << @player2
  session[:current_game] = @game.id
  redirect to("/game")
end
 
get '/game' do
  @player1 = Player.find(session[:first_player])
  @player2 = Player.find(session[:second_player])
  @game = session[:current_game]
  erb :game
end

put '/update' do
  @current_game = current_game
  @current_game.winner = params["winner"]
  @current_game.winning_time = params["winning_time"].to_f.round(2)
  puts @current_game.winning_time
  @current_game.save
end

get '/new_game' do
  @player1 = session[:first_player]
  @player2 = session[:second_player]
  @game = Game.create()
  session[:current_game] = @game.id
  @game.players << Player.find(session[:first_player])
  @game.players << Player.find(session[:second_player])
  @game = session[:current_game]
  erb :game
end