require "application_system_test_case"

class FractionsTest < ApplicationSystemTestCase
  setup do
    @fraction = fractions(:one)
  end

  test "visiting the index" do
    visit fractions_url
    assert_selector "h1", text: "Fractions"
  end

  test "should create fraction" do
    visit fractions_url
    click_on "New fraction"

    fill_in "Contract", with: @fraction.contract
    fill_in "Lights", with: @fraction.lights
    fill_in "Name", with: @fraction.name
    fill_in "Pearl", with: @fraction.pearl
    check "Plate" if @fraction.plate
    fill_in "Primary", with: @fraction.primary
    fill_in "Secondary", with: @fraction.secondary
    fill_in "Smoke", with: @fraction.smoke
    click_on "Create Fraction"

    assert_text "Fraction was successfully created"
    click_on "Back"
  end

  test "should update Fraction" do
    visit fraction_url(@fraction)
    click_on "Edit this fraction", match: :first

    fill_in "Contract", with: @fraction.contract
    fill_in "Lights", with: @fraction.lights
    fill_in "Name", with: @fraction.name
    fill_in "Pearl", with: @fraction.pearl
    check "Plate" if @fraction.plate
    fill_in "Primary", with: @fraction.primary
    fill_in "Secondary", with: @fraction.secondary
    fill_in "Smoke", with: @fraction.smoke
    click_on "Update Fraction"

    assert_text "Fraction was successfully updated"
    click_on "Back"
  end

  test "should destroy Fraction" do
    visit fraction_url(@fraction)
    click_on "Destroy this fraction", match: :first

    assert_text "Fraction was successfully destroyed"
  end
end
