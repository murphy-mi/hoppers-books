class ChangePriceInBooks < ActiveRecord::Migration[7.0]
  def change
    change_column :books, :price, :float
  end
end
