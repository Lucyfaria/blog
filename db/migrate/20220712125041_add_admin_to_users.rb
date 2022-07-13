class AddAdminToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :superadmin, :boolean, default: false, null: false
    add_column :users, :admin, :boolean, default: false, null: false
    add_column :users, :employee, :boolean, default: false, null: false
    add_column :users, :intern, :boolean, default: false, null: false
  end
end
