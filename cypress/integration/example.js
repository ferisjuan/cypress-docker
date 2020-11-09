describe('Cypress Tests with Docker', () => {
	it('should load website', () => {
		cy.visit('http://example.com/')
	})

	it('should load h1 element', () => {
		cy.get('h1').should('be.visible')
	})
})
