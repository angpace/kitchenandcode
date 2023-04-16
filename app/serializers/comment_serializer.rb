class CommentSerializer < ActiveModel::Serializer
  attributes :id, :blog_id, :user_id, :content
 
end
