import Table from "./table"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Таблица контрагентов", () => {
    test("Проверка отрисовки таблицы и отображения двух контрагентов", () => {
        const contrAgents = [
            {
                id: self.crypto.randomUUID(),
                name: "Agent 1",
                inn: "12345678901",
                address: "Address 1",
                kpp: "123456789",
            },
            {
                id: self.crypto.randomUUID(),
                name: "Agent 2",
                inn: "12345678901",
                address: "Address 2",
                kpp: "123456789",
            },
        ]
        
        render(<Table contrAgents={contrAgents} />)
        
        const tableElement = screen.getByTestId("table-test")
        expect(tableElement).toBeInTheDocument()

        const rows = screen.getAllByRole("row")
        expect(rows).toHaveLength(contrAgents.length + 1) // включая заголовок таблицы
    })
})
