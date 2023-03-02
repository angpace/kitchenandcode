class Blog < ApplicationRecord
    validates :feature, :image_one, :paragraph_one, :preview, :date, presence: true
end
