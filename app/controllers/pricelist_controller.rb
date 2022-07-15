class PricelistController < ApplicationController
  def index
    @fractions = Hash[Fraction.all.map do |fraction|
      [
        fraction.name,
        {
          primary: fraction.primary
        }
      ]
    end]
  end
end
