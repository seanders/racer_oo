class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :winner
      t.decimal :winning_time, :precision => 5, :scale => 2
    end   
  end
end
