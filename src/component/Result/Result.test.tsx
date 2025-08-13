import{render, screen, within } from "@testing-library/react"
import Result from "./"

describe("the result component returns different text based on prop", () => {

    test("the 'right' result renders a congratulations message ", () => {

        render(<Result outcome = "right" country="sweden" />)

        const result = screen.getByTestId("result")
        
        const message = within(result).getByRole('heading', {level: 3, name: /congratulation/i})
        expect(message).toBeInTheDocument()

    })


    test("the 'wrong' result renders a failure message ", () => {

        render(<Result outcome = "wrong" country="sweden" />)
        const message = screen.getByRole('heading', {level: 3, name: /bad luck/i})
        expect(message).toBeInTheDocument()
    })
})