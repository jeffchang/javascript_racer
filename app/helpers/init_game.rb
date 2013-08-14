def init_game
  session[:name1] = params[:player1] || session[:name1]
  session[:name2] = params[:player2] || session[:name2]
  p players = [session[:name1], session[:name2]].map { |name| Player.find_or_create_by_name(:name => name) }
  @game = Game.create({players: players})
  session[:game] = @game.id
end