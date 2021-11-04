class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :title
      t.string :image
      t.string :information
      t.string :service_mileage
      t.string :service_area

      t.timestamps
    end
  end
end
