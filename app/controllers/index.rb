get '/' do
  
  erb :index
end

post '/start' do
  init_game
  erb :racer
end

get '/start' do
  init_game
  erb :racer
end

post '/winner' do
  @url = SecureRandom.hex(10)
  game = Game.find(session[:game])
  game.winner = params[:winner]
  game.time = params[:time]
  game.url = @url
  game.status = "complete"
  game.save
  erb :restart
end

get '/:game_id' do
  @game = Game.where(url: params[:game_id]).first rescue nil
  erb :index
end