import { render } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('should display the right quantity of tasks', () => {
    const wrapper = render(<Counter amount={{ created: 3, done: 2 }} />)

    const created = wrapper.getByText('3', {
      exact: true,
      selector: 'span',
    })
    const done = wrapper.getByText('2 de 3')

    expect(created).toBeInTheDocument()
    expect(done).toBeInTheDocument()
  })
})
