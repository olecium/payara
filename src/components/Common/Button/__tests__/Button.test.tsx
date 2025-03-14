import Button from "../Button";
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('renders Button component', () => {
    render(<Button text="ButtonTest" btnClassName="button"/>)
    expect(screen.getByText(/ButtonTest/i)).toBeInTheDocument()
  })
})