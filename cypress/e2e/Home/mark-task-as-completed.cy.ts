it('should mark a task as completed', () => {
  cy.visit('/')

  cy.get('[data-testid="new-task-input"]').type('Fazer reunião com o time')
  cy.get('[data-testid="add-new-task"]').click()

  cy.get('[data-testid="task-item"]').get('input[type="checkbox"]').check()

  cy.get('[data-testid="new-task-input"]').type('Levar o Costelinha para passear')
  cy.get('[data-testid="add-new-task"]').click()

  cy.get('[data-testid="done-tasks-counter"]').then((counter) => {
    expect(counter).to.contain('1 de 2')
  })
})

it('should unmark a task', () => {
  cy.visit('/')

  cy.get('[data-testid="new-task-input"]').type('Fazer reunião com o time')
  cy.get('[data-testid="add-new-task"]').click()

  cy.get('[data-testid="task-item"]').get('input[type="checkbox"]').check()

  cy.get('[data-testid="new-task-input"]').type('Levar o Costelinha para passear')
  cy.get('[data-testid="add-new-task"]').click()

  cy.get('[data-testid="done-tasks-counter"]').then((counter) => {
    expect(counter).to.contain('0 de 2')
  })
})
