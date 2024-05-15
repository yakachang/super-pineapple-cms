"use client"

import { useEffect } from "react"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { getAuth } from "firebase/auth"
import { PrimeReactProvider } from "primereact/api"
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from "reactfire"

import { initMockServer } from "@/mockServer"

import firebaseConfig from "../../../firebase.config.json"

type Props = Readonly<{
  children: React.ReactNode
}>

const queryClient = new QueryClient()

export const GlobalProviders = ({ children }: Props) => {
  useEffect(() => {
    let mockServer: ReturnType<typeof initMockServer>
    if (process.env.NEXT_PUBLIC_APP_ENV === "test") {
      console.log("Starting mock server")
      mockServer = initMockServer()
    }

    return () => {
      if (mockServer) {
        mockServer.shutdown()
      }
    }
  }, [])
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseAuthProvider>
        <PrimeReactProvider value={{ unstyled: false }}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </PrimeReactProvider>
      </FirebaseAuthProvider>
    </FirebaseAppProvider>
  )
}

const FirebaseAuthProvider = ({ children }: Props) => {
  const app = useFirebaseApp()
  const auth = getAuth(app)
  return <AuthProvider sdk={auth}>{children}</AuthProvider>
}
