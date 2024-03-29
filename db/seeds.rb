# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib','seeds','prices.csv'))
csv = CSV.parse(csv_text, :headers => true, col_sep: ";")

csv.each do |row|
    t = Price.new
    t.name = row['Name']
    t.normal = row['Normal']
    t.import = row['Import']
    t.motorrad = row['Motorrad']
    t.heli = row['Heli']
    t.save
end