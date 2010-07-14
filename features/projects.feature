Feature: View and Manage Projects
	In order to update my portfolio
	As Tom
	I want to edit my projects portfolio
	
	Scenario: view projects page
		Given I am not logged in
		When I go to the projects page
		Then I should see "Portfolio"
	
	Scenario: edit projects
		Given I am logged in
		When I go to the projects page
		Then I should see "edit project"
		And I should see "add new project"
