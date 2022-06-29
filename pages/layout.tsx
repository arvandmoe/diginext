import { Container } from '@mui/material'
import Footer from 'shared/layout/Footer'
import Navbar from 'shared/layout/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}
