import { useContext, useEffect, useState } from "react"
import { ContrAgent } from "../../domain/contrAgent"
import "./table.css"
import useContrAgentContext from "../../contexts/contr_agent/contrAgentContext"
import ContrAgentRow from "./row/row"

export default function ContrAgentTable() {
    const { contrAgents, loadContrAgents } = useContrAgentContext()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        loadContrAgents()
        setLoading(false)
    }, [])

    return (
        <div className="contragents-table">
            <table
                data-testid="table-test"
                className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
                <thead className="text-xs  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Наименование
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ИНН
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Адрес
                        </th>
                        <th scope="col" className="px-6 py-3">
                            КПП
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="text-gray-700">
                        {contrAgents.map((contrAgent: ContrAgent) => (
                            <ContrAgentRow contrAgent={contrAgent} />
                        ))}
                    </tbody>
                )}
                {loading && <div>Loading data...</div>}
            </table>
        </div>
    )
}
