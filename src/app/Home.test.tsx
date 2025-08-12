import {render, screen} from "@testing-library/react"
import Home from "./page"

describe("Test home page functionality", () => {

    test("thgat three country buttons are rendered", () => {
       render(<Home />)

       const countryButtons = screen.getAllByRole("button")
       const filteredCountries = countryButtons.filter(country => country.textContent === "Australia")

       expect(countryButtons.length).toBe(3)

       expect(countryButtons[1]).toBeInTheDocument()
        
       expect(countryButtons[0]).toHaveTextContent(/australia/i)
       expect(countryButtons[1]).toHaveTextContent(/new zealand/i)
       expect(countryButtons[2]).toHaveTextContent(/fiji/i)

       expect(filteredCountries[0]).toBeInTheDocument()
    })


})