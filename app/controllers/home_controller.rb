class HomeController < ApplicationController
  def index
    
  end

  def pricelist
    @fractions = Fraction.all
  end
end
