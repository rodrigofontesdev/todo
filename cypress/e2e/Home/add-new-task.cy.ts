it('should add a new task', () => {
  cy.visit('/')

  cy.get('[data-testid="new-task-input"]').type('Fazer reunião com o time')
  cy.get('[data-testid="add-new-task"]').click()

  cy.get('[data-testid="new-task-input"]').type('Levar o Costelinha para passear')
  cy.get('[data-testid="add-new-task"]').click()

  cy.get('[data-testid="created-tasks-counter"]').then((counter) => {
    expect(counter).to.contain(2)
  })

  cy.get('[data-testid="done-tasks-counter"]').then((counter) => {
    expect(counter).to.contain('0 de 2')
  })

  cy.get('[data-testid="task-item"]').then((newTask) => {
    expect(newTask).to.have.lengthOf(2)
  })
})
