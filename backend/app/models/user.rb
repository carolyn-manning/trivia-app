class User < ApplicationRecord
    has_many :games 
    before_save :build_game 

    def build_game
        self.games.new(score: 0)
    end 
end
