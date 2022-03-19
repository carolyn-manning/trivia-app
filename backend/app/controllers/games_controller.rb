class GamesController < ApplicationController
    def index
        render json: Game.all, include: [:user]
    end

    def show
        game  = Game.find_by(id: params[:id])
        render json: game, include: [:user]
    end
end
