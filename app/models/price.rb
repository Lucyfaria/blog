class Price < ApplicationRecord

    def priceindex
        @prices = Prices.all

end