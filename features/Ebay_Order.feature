Feature: Purchase product from Ebay
  As a customer
  I should be able to search, add to cart and check-out a product


  Scenario: Login into the ebay
    Given I log in as  an ebay customer
    And I clicked on SignIn button on the home page
	And I enter valid username "aditi"
	  And I enter valid password "aditi"
	  And I click on Submit button


	Scenario: Searching an item into the ebay
		Given I log in as  an ebay customer
		And I clicked on SignIn button on the home page
		And I enter valid username "aditi"
		And I enter valid password "aditi"
		And I click on Submit button
	  	And  search for product "shoes"
    	When I selected  my product
		And Added my product to my cart
		Then I click on Checkout
		And enter my street address "800 Bourke st, Docklands vic 3008"
		And enter mobile number "0499999999"
		And click on continue button
		Then I am on the checkout Page

