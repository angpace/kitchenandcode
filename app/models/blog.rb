class Blog < ApplicationRecord
    belongs_to :user
    
    validates :feature, :image_one, :paragraph_one, :preview, :date, presence: true
end
