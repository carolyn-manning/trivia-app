class GamesController < ApplicationController
    def index
        render json: Game.all
    end

    def show
        game  = Game.find_by(id: params[:id])
        render json: game 
    end
end
