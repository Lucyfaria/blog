class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  #devise :database_authenticatable, :registerable,
   #      :recoverable, :rememberable, :validatable
  devise :database_authenticatable, :registerable, :rememberable,:authentication_keys => [:username]
  validates :email, uniqueness: true
  validates :username, uniqueness: true
  end
