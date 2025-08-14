import {fireEvent, render, screen, within} from "@testing-library/react"
import Home from "./page"
import Country from "@/component/Country"

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

describe("Home page integration test", () => {
    test("that the target country name appeaers in the country buttons", () => {
        render(<Home />)

        const targetCountry = screen.getByTestId("target-country") as HTMLImageElement

        expect(targetCountry).toBeInTheDocument()

        const targetCountryName = targetCountry.alt

        const countryButtons = screen.getAllByRole("button")
         expect(countryButtons.length).toBe(3)

        const targetCountryButton = countryButtons.filter(country => country.textContent === targetCountryName)


         expect(targetCountryButton.length).toBe(1)
        //  expect(targetCountryButton[0]).toBeInTheDocument()
         expect(targetCountryButton[0]).toHaveTextContent(targetCountryName)

         const notTargetCountryButton = countryButtons.filter(country => country.textContent !== targetCountryName)
           expect(notTargetCountryButton.length).toBe(2)
           expect(notTargetCountryButton[0].textContent).not.toEqual(notTargetCountryButton[1].textContent)


         const result = screen.queryByTestId("result")  
         expect(result).not.toBeInTheDocument()

    })

    test("that the user the correct country", () => {
        render(<Home />)

        const targetCountry = screen.getByTestId("target-country") as HTMLImageElement
        const targetCountryName = targetCountry.alt

        const countryButtons = screen.getAllByRole("button")
        const targetCountryButton = countryButtons.filter(country => country.textContent === targetCountryName)
        
        let result = screen.queryByTestId("result")  
         expect(result).not.toBeInTheDocument()

        fireEvent.click(targetCountryButton[0])
 
         result = screen.queryByTestId("result")
         expect(result).toBeInTheDocument()
        
        const message = within(result!).getByRole('heading', {level: 3, name: /congratulation/i})
        expect(message).toBeInTheDocument()
    })

    test("that the user the incorrect country", () => {
        render(<Home />)

        const targetCountry = screen.getByTestId("target-country") as HTMLImageElement
        const targetCountryName = targetCountry.alt

        const countryButtons = screen.getAllByRole("button")
        const wrongCountryButton = countryButtons.filter(country => country.textContent !== targetCountryName)
        const targetCountryButton = countryButtons.filter(country => country.textContent === targetCountryName)
        
        let result = screen.queryByTestId("result")  
         expect(result).not.toBeInTheDocument()

        fireEvent.click(wrongCountryButton[0])
 
         result = screen.queryByTestId("result")
         expect(result).toBeInTheDocument()
        
        const message = within(result!).getByRole('heading', {level: 3, name: /bad luck/i})
        expect(message).toBeInTheDocument()
    })

    test("that the user the incorrect country twice before selecting the right country", () => {
        render(<Home />)

        const targetCountry = screen.getByTestId("target-country") as HTMLImageElement
        const targetCountryName = targetCountry.alt

        const countryButtons = screen.getAllByRole("button")
        const wrongCountryButton = countryButtons.filter(country => country.textContent !== targetCountryName)
        const targetCountryButton = countryButtons.filter(country => country.textContent === targetCountryName)
        


        let result = screen.queryByTestId("result")  
         expect(result).not.toBeInTheDocument()

        fireEvent.click(wrongCountryButton[0])
 
         result = screen.queryByTestId("result")
         expect(result).toBeInTheDocument()
        
       let message = within(result!).getByRole('heading', {level: 3, name: /bad luck/i})
        expect(message).toBeInTheDocument()

        fireEvent.click(wrongCountryButton[1])

        result = screen.queryByTestId("result") 
       message = within(result!).getByRole('heading', {level: 3, name: /bad luck/i})
        expect(message).toBeInTheDocument()

        fireEvent.click(targetCountryButton[0])
        result = screen.queryByTestId("result") 
       message = within(result!).getByRole('heading', {level: 3, name: /congratulation/i})
       expect(message).toBeInTheDocument()
    })


})