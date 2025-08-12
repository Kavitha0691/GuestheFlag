import {render, screen} from '@testing-library/react'
import Country from './'

test("that the name prop is rendered inside a button element", () => {
    const mockData = {
        name: "Atlantis",
        updateFunction: () => {}
    }
    render(<Country {...mockData} />)

    const element = screen.getByRole('button', {name: mockData.name})
    expect(element).toBeInTheDocument()
})