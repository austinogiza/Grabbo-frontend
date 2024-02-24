"use client"
import { grabboStore } from "@/store/store"
import React from "react"
import { Provider } from "react-redux"

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider store={grabboStore}>{children}</Provider>
}
