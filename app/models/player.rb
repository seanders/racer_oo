class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_and_belongs_to_many :games
  validates :name, :uniqueness => true
end
