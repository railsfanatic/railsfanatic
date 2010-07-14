Feature: Access the site
	In order to learn about Tom's Ruby skills
	As a potential employer, partner, or collaborator
	I want to visit the site
	
	Scenario: view home page
		Given I am not logged in
		When I go to the homepage
		Then I should see "Welcome"
		And I should see "Welcome to My Site"
		