class Blog < ApplicationRecord
    belongs_to :user
    has_many :comments, dependent: :destroy
    has_one :recipe, dependent: :destroy
    
    validates :feature, :image_one, :paragraph_one, :preview, :date, presence: true
end
