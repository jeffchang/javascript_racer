class Game < ActiveRecord::Base
  has_and_belongs_to_many :players
  validate :has_two_players

  def has_two_players
    errors.add(:players, "Must have two players") if players.length != 2
  end
end
