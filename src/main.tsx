import "./style.css"
import { createRoot } from "react-dom/client"
import App from "./components/app"
import { ContrAgentContextProvider } from "./contexts/contr_agent/contrAgentContext"

const rootElement = document.getElementById("root")!

const root = createRoot(rootElement)
root.render(
    <ContrAgentContextProvider>
        <App />
    </ContrAgentContextProvider>
)
