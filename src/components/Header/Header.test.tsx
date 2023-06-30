import { render, screen } from '@testing-library/react'
import { describe, test } from 'node:test'

import { Header } from './index'

describe('header', () => {
  test('should be true', () => {
    render(<Header />)
    const header = screen.getByRole('article', { name: 'header' })
    expect(header).toBeInTheDocument()
  })
})
