"use client"
import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function RootLayout({
  children,
}

) 
{
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
       
          <Navbar />
          {children}
          <Footer />
       
      </body>
    </html>
  )
}
