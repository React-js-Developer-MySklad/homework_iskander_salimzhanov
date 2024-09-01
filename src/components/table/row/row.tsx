import useContrAgentContext from "../../../contexts/contr_agent/contrAgentContext"
import { ContrAgent } from "../../../domain/contrAgent"

export default function ContrAgentRow({ contrAgent }: { contrAgent: ContrAgent }) {
    const { openEditModal, deleteContrAgent } = useContrAgentContext()

    return (
        <tr
            className="hover:bg-gray-100"
            data-testid="contr-agent-row-test"
            key={contrAgent.id.toString()}
            onClick={() => openEditModal(contrAgent)}
        >
            <th scope="row">{contrAgent.id}</th>
            <td>{contrAgent.name}</td>
            <td>{contrAgent.inn}</td>
            <td>{contrAgent.address}</td>
            <td>{contrAgent.kpp}</td>
            <td className="px-6 py-4 text-right">
                <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={(e) => {
                        e.stopPropagation()
                        deleteContrAgent(contrAgent.id.toString())
                    }}
                >
                    Удалить
                </a>
            </td>
        </tr>
    )
}
