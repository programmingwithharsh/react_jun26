import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Star from './Star'

describe('Star Component', () => {
    it('should render the star component', () => {
        render(<Star rating={5} />)
        expect(screen.getByText('5')).toBeInTheDocument()
    })

    it('should render 5 star icons', () => {
        const { container } = render(<Star rating={4} />)
        const stars = container.querySelectorAll('.fa-star')
        expect(stars).toHaveLength(5)
    })

    it('should display the rating prop', () => {
        render(<Star rating={3} />)
        expect(screen.getByText('3')).toBeInTheDocument()
    })
})