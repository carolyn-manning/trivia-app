class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :choice_1
      t.string :choice_2
      t.string :choice_3
      t.string :answer

      t.timestamps
    end
  end
end
