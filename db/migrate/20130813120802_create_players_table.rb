class CreatePlayersTable < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name, :unique => true
    end
  end
end
