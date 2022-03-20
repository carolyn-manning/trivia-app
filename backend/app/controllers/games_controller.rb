class GamesController < ApplicationController
    
    # def create
    #     game = Game.new(game_params)
    #     if game.save 
    #         render json: game
    #     end
    # end 

    def index
        render json: Game.all, include: [:user]
    end

    def show
        game  = Game.find_by(id: params[:id])
        render json: game, include: [:user]
    end

    def update
        game = Game.find_by(id: params[:id])
        game.update(game_params)
    end

    private 
    def game_params
        params.require(:game).permit(:score) 
    end 
end
