import './globals.css'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0 p-0">
      <body className="bg-darkNavy m-0" >
        {children}</body>
    </html>
  )
}
