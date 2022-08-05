import * as React from "react"
import DefaultLayout from "../components/layouts/DefaultLayout"
import ContactUs from "../ui-components/ContactUs"

const IndexPage = () => {
  return (
    <DefaultLayout>
      <div style={{ margin: `0 auto`, maxWidth: `800px` }}>
        <ContactUs/>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
