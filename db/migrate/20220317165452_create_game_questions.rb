class CreateGameQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :game_questions do |t|
      t.integer :question_id
      t.integer :game_id

      t.timestamps
    end
  end
end
