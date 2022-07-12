class CreateBestSellers < ActiveRecord::Migration[7.0]
  def change
    create_table :best_sellers do |t|
      t.integer :book_id

      t.timestamps
    end
  end
end
