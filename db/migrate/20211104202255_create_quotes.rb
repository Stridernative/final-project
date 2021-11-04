class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :email
      t.string :message
      t.belongs_to :service, null: false, foreign_key: true

      t.timestamps
    end
  end
end
