import {render, screen} from '@testing-library/react'
import Header from './'

describe("That the header component functions as expected", () => {
  it("That the page title is shown on the same screen", () => {
     render(<Header />)

     const pageTitle = screen.getByText(/flags of the world!/i)
     expect (pageTitle).toBeInTheDocument()
  })

  it("Test that the page title is an h1" , () => {
    render(<Header />)

    const pageTitle = 
    screen.getByRole('heading' , {
            level: 1,
            name: "Flags of the world!"
     });
    expect (pageTitle).toBeInTheDocument()

  })

  test("the subtitle component renders" , () => {
    render(<Header/>)

    const SubTitleText = screen.getByRole('heading' , 
        {
            level:3,
            name: /Guess the country!/i
        })

        expect(SubTitleText).toBeInTheDocument()
  })
})
