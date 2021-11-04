class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email, :message
end
