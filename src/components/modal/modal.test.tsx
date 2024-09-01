import Modal from "./modal"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Модальное окно добавления контрагента", () => {
    test("Проверка сохранения пустого модального окна", async () => {
        render(<Modal onSubmit={() => {}} onClose={() => {}} />)

        const modalElement = screen.getByTestId("modal-test")
        expect(modalElement).toBeInTheDocument()

        fireEvent.click(screen.getByTestId("add-data-button"))
        await waitFor(() => {
            expect(screen.getByLabelText("Наименование", { selector: "input" })).toHaveClass("error")
            expect(screen.getByLabelText("ИНН", { selector: "input" })).toHaveClass("error")
            expect(screen.getByLabelText("Адрес", { selector: "input" })).toHaveClass("error")
            expect(screen.getByLabelText("КПП", { selector: "input" })).toHaveClass("error")
        })
    }),
        test("Проверка сохранения модального окна с заполнеными данными", () => {
            render(<Modal onSubmit={() => {}} onClose={() => {}} />)

            const modalElement = screen.getByTestId("modal-test")
            expect(modalElement).toBeInTheDocument()

            fireEvent.change(screen.getByLabelText("Наименование", { selector: "input" }), {
                target: { value: "New ContrAgent" },
            })
            fireEvent.change(screen.getByLabelText("ИНН", { selector: "input" }), { target: { value: "12345678901" } })
            fireEvent.change(screen.getByLabelText("Адрес", { selector: "input" }), {
                target: { value: "Some Adress" },
            })
            fireEvent.change(screen.getByLabelText("КПП", { selector: "input" }), { target: { value: "123456789" } })

            fireEvent.click(screen.getByTestId("add-data-button"))
            expect(screen.getByLabelText("Наименование", { selector: "input" })).not.toHaveClass("error")
            expect(screen.getByLabelText("ИНН", { selector: "input" })).not.toHaveClass("error")
            expect(screen.getByLabelText("Адрес", { selector: "input" })).not.toHaveClass("error")
            expect(screen.getByLabelText("КПП", { selector: "input" })).not.toHaveClass("error")
        })
})
