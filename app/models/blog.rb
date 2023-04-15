class Blog < ApplicationRecord
    belongs_to :user
    has_many :comments, dependent: :destroy
    
    validates :feature, :image_one, :paragraph_one, :preview, :date, presence: true
end
