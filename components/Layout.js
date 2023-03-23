import Navbar from './Navbar'
import { CartProvider } from 'react-use-cart'

export default function Layout({ children }) {
  return (
    <>
      <CartProvider id='products'>
        <Navbar />
        <div className='container'>{children}</div>
      </CartProvider>
    </>
  )
}
