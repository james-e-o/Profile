import { data } from 'autoprefixer'
import './globals.css'
import Preloader from '@components/preloader'

export const metadata = {
  title: 'My profile',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
// const item= children
  return (
    <html lang="en" className="m-0 p-0">
      <body className="bg-darkNavy m-0 text-white font-sans" >
        {children}
        {/* <Preloader data= {children}>
          
        </Preloader> */}
      </body>
    </html>
  )
}
