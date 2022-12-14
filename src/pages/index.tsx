import * as React from "react"
import DefaultLayout from "../components/layouts/DefaultLayout"
import HeroLayout1 from "../ui-components/HeroLayout1"
import MarketingPricing from "../ui-components/MarketingPricing"

const IndexPage = () => {
  return (
    <DefaultLayout>
      <HeroLayout1/>
      <MarketingPricing/>
    </DefaultLayout>
  )
}

export default IndexPage
