class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :information, :service_mileage, :service_area
end
