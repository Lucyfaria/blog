class PricelistController < ApplicationController
  def index
    @fractions = Hash[Fraction.all.map do |fraction|
      [
        fraction.name,
        {
          primary: fraction.primary,
          secondary: fraction.secondary,
          pearl: fraction.pearl,
          lights: fraction.lights,
          smoke: fraction.smoke
        }
      ]
    end]
  end
end
