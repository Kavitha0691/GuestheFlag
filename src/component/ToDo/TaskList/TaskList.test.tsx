import {fireEvent, render, screen, within} from '@testing-library/react'
import TaskList from './'

describe("Integration test for ToDo app", () => {
    it("Test the remove task functionality" , () => {
        render(<TaskList />)

        let tasksInLists = screen.getAllByTestId("task-item")

        expect(tasksInLists.length).toBe(2)
        expect(tasksInLists[0]).toHaveTextContent("Study testing")

        const removeButton = within (tasksInLists[0]).getByRole('button')
        let removedTask = screen.queryByText(/study testing/i)
        expect(removedTask).toBeInTheDocument()

        fireEvent.click(removeButton)

         tasksInLists = screen.getAllByTestId("task-item")

        expect(tasksInLists.length).toBe(1)
        expect(tasksInLists[0]).not.toHaveTextContent("Study testing")

        removedTask = screen.queryByText(/study testing/i)
        expect(removedTask).not.toBeInTheDocument()
    })
})