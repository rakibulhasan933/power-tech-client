"use client"

import { SessionProvider } from "next-auth/react"

export default async function NextAuthProvider({ children }) {
	return (
		<>
			<SessionProvider>
				{children}
			</SessionProvider>
		</>
	)
}