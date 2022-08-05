import React from "react"
import "@aws-amplify/ui-react/styles.css"
import "./DefaultLayout.css"
import NavBar from "../../ui-components/NavBar"
import MarketingFooter from "../../ui-components/MarketingFooter"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: `0 auto`, display: 'flex', flexDirection: 'column' }}>
      <header style={{ margin: `0 auto` }}>
        <NavBar/>
      </header>
      <main style={{ margin: `24px auto` }}>
        {children}
      </main>
      <footer style={{ margin: `0 auto` }}>
        <MarketingFooter/>
      </footer>
    </div>
  )
}
