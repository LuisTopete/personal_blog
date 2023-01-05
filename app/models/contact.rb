class Contact < ApplicationRecord
  validates :fname, :lname, :phone, :email, presence: true 
  validates :phone, :email, uniqueness: true
end
