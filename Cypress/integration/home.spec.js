/// <reference types="cypress" />

describe('Home Page', () => {
  it('Should load load content from the server', () => {
    cy.visit('http://localhost:3000')

    const text = cy.get('[data-test-id=server-statement]')

    text.should('contain.text', 'Hello!')
  })

  describe('Basic Tests', () => {
    it('should succeed', () => {
      expect(true).to.equal(true)
    })

    it("should succeed", () => {
      expect(1).to.not.equal(2)
    })

    it("should succeed", () => {
      let i = 5
      let j = 7
      let k = i + j
      console.log(`${i} plus ${j} is ${k}`)
      expect(k).to.equal(i+j)
    })
  })
})
