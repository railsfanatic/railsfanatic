class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.string :name
      t.string :client
      t.string :url
      t.text :description
      t.integer :position

      t.timestamps
    end
  end

  def self.down
    drop_table :projects
  end
end
