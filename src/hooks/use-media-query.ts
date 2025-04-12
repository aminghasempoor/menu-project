"use client"
import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches
        }
        return false
    })

    useEffect(() => {
        const media = window.matchMedia(query)

        const listener = () => setMatches(media.matches)
        media.addEventListener("change", listener)

        // Clean up
        return () => media.removeEventListener("change", listener)
    }, [query])

    return matches
}
