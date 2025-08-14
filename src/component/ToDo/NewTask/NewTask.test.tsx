import {fireEvent, render, screen} from '@testing-library/react'
import NewTask from './'

test("The user input is saved", () => {
    render(<NewTask addTask={() => {}} />)

    const mockTask = "Do the dishes"
    let userInput = screen.getByLabelText('Add your Task:') as HTMLInputElement

    expect(userInput).toBeInTheDocument()
    expect(userInput.value).toBe("")

    fireEvent.change(userInput, {target: {value:mockTask}})

     expect(userInput).toBeInTheDocument()
    expect(userInput.value).toBe(mockTask)
})