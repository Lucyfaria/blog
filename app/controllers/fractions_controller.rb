class FractionsController < ApplicationController
  before_action :set_fraction, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token

  # GET /fractions or /fractions.json
  def index
    @fractions = Fraction.all
  end

  # GET /fractions/1 or /fractions/1.json
  def show
  end

  # GET /fractions/new
  def new
    @fraction = Fraction.new
  end

  # GET /fractions/1/edit
  def edit
  end

  # POST /fractions or /fractions.json
  def create
    @fraction = Fraction.new(fraction_params)

    respond_to do |format|
      if @fraction.save
        format.html { redirect_to fraction_url(@fraction), notice: "Fraktion wurde erfolgreich erstellt." }
        format.json { render :show, status: :created, location: @fraction }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @fraction.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /fractions/1 or /fractions/1.json
  def update
    respond_to do |format|
      if @fraction.update(fraction_params)
        format.html { redirect_to fraction_url(@fraction), notice: "Fraktion wurde erfolgreich bearbeitet." }
        format.json { render :show, status: :ok, location: @fraction }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @fraction.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fractions/1 or /fractions/1.json
  def destroy
    @fraction.destroy

    respond_to do |format|
      format.html { redirect_to fractions_url, notice: "Fraktion wurde erfolgreich gelöscht." }
      format.json { render json: Fraction.all, status: :ok}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fraction
      @fraction = Fraction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fraction_params
      params.require(:fraction).permit(:name, :primary, :secondary, :pearl, :smoke, :lights, :contract, :plate, :id)
    end
end
