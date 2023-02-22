import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { AddsValueSection } from "../features"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <AddsValueSection />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
