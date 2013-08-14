class Player < ActiveRecord::Base
  has_and_belongs_to_many :games

  validates_uniqueness_of :name

end
