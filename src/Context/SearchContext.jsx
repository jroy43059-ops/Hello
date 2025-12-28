import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

export default function SearchContextProvider({ children }) {
    const [gender, setGender] = useState('')
    const [category, setCategory] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [occasion, setOccasion] = useState('')
    const [collections, setCollection] = useState('')
    const [skip, setSkip] = useState(0)
    const [page, setPage] = useState(1)

    const [breadCrum2, setBreadCrum2] = useState('')
    const [breadCrum3, setBreadCrum3] = useState('')
    const [heading, setHeading] = useState('')

    return (
        <SearchContext.Provider value={{
            gender, setGender, category, setCategory,
            size, setSize, color, setColor,
            occasion, setOccasion, collections, setCollection,
            breadCrum2, setBreadCrum2, breadCrum3, setBreadCrum3,
            heading, setHeading, skip, setSkip, page, setPage
        }} >{children}</SearchContext.Provider>
    )
}
