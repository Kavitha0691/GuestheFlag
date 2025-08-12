import {render, screen} from '@testing-library/react'
import SubTitle from '.'

test("the correct prop is rendered", () => {
    const mockText = "Testing 123"
    render(<SubTitle titleText= {mockText}/>)

    const SubTitleElement = screen.getByRole('heading',{
        level:3 ,
        name: mockText
        }
    )

 expect(SubTitleElement).toBeInTheDocument()

 })