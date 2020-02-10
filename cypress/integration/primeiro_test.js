import { cyan, paleturquoise } from "color-name";

describe('Initial Test', function() {
    it('Visits the demo redmine', function (){
        cy.visit('http://demo.redmine.org/')
        cy.contains('Sign in').click()
        cy.pause()
        cy.get('[id="username"]').type('labittencourt')
        cy.get('[id="password"]').type('a1b2')
        cy.get('[type="submit"]').click()

        cy.contains('Projetos').click()
        cy.contains('Novo projeto').click()

        cy.get('[id="project_name"]').type('Projeto Luiza Labs')

        cy.get('[id="project_enabled_module_names_documents"]').uncheck()
        cy.get('[id="project_enabled_module_names_time_tracking"]').uncheck()
        cy.get('[id="project_enabled_module_names_news"]').uncheck()
        cy.get('[id="project_enabled_module_names_files"]').uncheck()
        cy.get('[id="project_enabled_module_names_wiki"]').uncheck()
        cy.get('[id="project_enabled_module_names_boards"]').uncheck()
        cy.get('[id="project_enabled_module_names_calendar"]').uncheck()
        cy.get('[id="project_enabled_module_names_gantt"]').uncheck()
        cy.get('[value="2"]').uncheck()
        cy.get('[value="3"]').uncheck()

        cy.get('[name="commit"]').click()



    })
})