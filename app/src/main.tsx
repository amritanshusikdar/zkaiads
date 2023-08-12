import "./polyfills"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import Wallet from "./components/Wallet"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Wallet>
      <App />
    </Wallet>
  </React.StrictMode>
)
