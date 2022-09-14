import { ReactNode } from "react"
import Footer from "../Footer"
import Header from "../Header"
import {  Main } from "./styles"

type props = {
  children: ReactNode
}

const Template = ( {children}: props ) => {

  return(
    <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
    </>
  )
}

export default Template