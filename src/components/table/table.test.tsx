import Table from "./table"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Contragent } from "src/domain/contrAgent"

describe("Таблица контрагентов", () => {
    test("Проверка отрисовки таблицы и отображения двух контрагентов", () => {
        const contrAgents: Contragent[] = [
            new Contragent(self.crypto.randomUUID(), "Agent 1", "12345678901", "Address 1", "123456789"),
            new Contragent(self.crypto.randomUUID(), "Agent 2", "12345678901", "Address 2", "123456789"),
        ]

        render(<Table contrAgents={contrAgents} />)

        const tableElement = screen.getByTestId("table-test")
        expect(tableElement).toBeInTheDocument()

        const rows = screen.getAllByRole("row")
        expect(rows).toHaveLength(contrAgents.length + 1)
    })
})
