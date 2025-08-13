import{render, screen} from "@testing-library/react"
import TargetCountry from "./"

test("the alt attribute is rendered correctly", () => {
    const mockCountry = {name:"Hello", image:"hello.jpeg"}
    render(<TargetCountry {...mockCountry} />)

    const country = screen.getByTestId("target-country") as HTMLImageElement

    expect(country.alt).toBe(mockCountry.name)

    expect(country.src).toContain(mockCountry.image)
})