import Modal from "./modal"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Модальное окно добавления контрагента", () => {
    test("Проверка сохранения пустого модального окна", () => {
        render(<Modal onClose={() => {}} />)

        const modalElement = screen.getByTestId("modal-test")
        expect(modalElement).toBeInTheDocument()

        fireEvent.click(screen.getByText(/close/i))
        expect(screen.getByLabelText(/name/i)).toHaveClass("error")
        expect(screen.getByLabelText(/inn/i)).toHaveClass("error")
        expect(screen.getByLabelText(/address/i)).toHaveClass("error")
        expect(screen.getByLabelText(/kpp/i)).toHaveClass("error")
    }),
        test("Проверка сохранения модального окна с заполнеными данными", () => {
            render(<Modal onClose={() => {}} />)

            const modalElement = screen.getByTestId("modal-test")
            expect(modalElement).toBeInTheDocument()

            fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "New ContrAgent" } })
            fireEvent.change(screen.getByLabelText(/inn/i), { target: { value: "12345678901" } })
            fireEvent.change(screen.getByLabelText(/address/i), { target: { value: "Some Adress" } })
            fireEvent.change(screen.getByLabelText(/kpp/i), { target: { value: "123456789" } })

            fireEvent.click(screen.getByText(/close/i))
            expect(screen.getByLabelText(/name/i)).not.toHaveClass("error")
            expect(screen.getByLabelText(/inn/i)).not.toHaveClass("error")
            expect(screen.getByLabelText(/address/i)).not.toHaveClass("error")
            expect(screen.getByLabelText(/kpp/i)).not.toHaveClass("error")
        })
})
