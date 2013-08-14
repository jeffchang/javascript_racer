class CreateGameTable < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner, :status, :time, :url
    end
  end
end
