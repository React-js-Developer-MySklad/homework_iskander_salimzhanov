import { ContrAgent } from "../../domain/contrAgent"

type ContragentArray = {
    contrAgents: ContrAgent[]
}

export default function Table({ contrAgents }: ContragentArray) {
    return (
        <table data-testid="table-test" className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {contrAgents.map((agent) => (
                    <tr key={agent.id}>
                        <th scope="row">{agent.id}</th>
                        <td>{agent.name}</td>
                        <td>{agent.inn}</td>
                        <td>{agent.address}</td>
                        <td>{agent.kpp}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
