"use client"
import axios from "axios"
import { useEffect } from "react"
import { useAuth, useSigninCheck } from "reactfire"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Button } from "primereact/button"

import { SideMenu } from "../shared/SideMenu"

type Props = Readonly<{
  children: React.ReactNode
}>

const MainContentContainer = ({ children }: Props) => {
  return <div className="flex-grow p-4">{children}</div>
}

export const GlobalLayout = ({ children }: Props) => {
  const { status, data: signInCheckResult } = useSigninCheck()
  const auth = useAuth()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const token = await user.getIdToken()
        axios.interceptors.request.use(
          config => {
            config.headers.set("useridtoken", token)

            return config
          },
          error => {},
        )
      } else {
      }
    })
    return () => {
      unsubscribe()
    }
  }, [auth])

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "error") {
    return <div>{JSON.stringify(signInCheckResult.errors)}</div>
  }

  if (signInCheckResult.signedIn === false) {
    return (
      <Button onClick={handleSignIn} type="button">
        Sign in
      </Button>
    )
  }
  return (
    <div className="container m-auto h-screen flex flex-row items-stretch overflow-hidden">
      <div className="h-full overflow-y-auto py-2">
        <SideMenu />
      </div>
      <MainContentContainer>{children}</MainContentContainer>
    </div>
  )
}
