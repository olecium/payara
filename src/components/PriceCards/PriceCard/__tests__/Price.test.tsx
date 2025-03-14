import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react'
import Price from '../Price';
import { PriceRange } from '../../../../interfaces/enums';
import userEvent from '@testing-library/user-event';

const toggleMonthYearPrice = vi.fn()

describe('Price', () => {
  it('Price component rendered', () => {
    render(<Price range={PriceRange.month} toggleMonthYearPrice={toggleMonthYearPrice} price={99} />)
    expect(screen.getByText(/99/i)).toBeInTheDocument()
  }),
  it('Price component contains button', () => {
    render(<Price range={PriceRange.month} toggleMonthYearPrice={toggleMonthYearPrice} price={99} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  }),
   it('Price Monthly button function is called', async () => {
    render(<Price range={PriceRange.month} toggleMonthYearPrice={toggleMonthYearPrice} price={10} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(toggleMonthYearPrice).toHaveBeenCalled()
  })
})