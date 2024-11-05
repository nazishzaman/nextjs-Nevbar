import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Nevbar = () => {
  const router = useRouter();
  return (
    <div>
      <Link href="/">Welcome back to class</Link>
      <h1>Go to home page</h1>
      
    </div>
  )
}

export default Nevbar;


