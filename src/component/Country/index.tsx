'use client'
import {CountryType} from '@/utils/types'

interface CountryProps{
    name: string,
    updateFunction: (name:string) => void
}

const Country = ( {name, updateFunction}: CountryProps) => {
    return (
        <button onClick={() => updateFunction(name)} className= "basis-[30%] border border-white p-4 rounded-2xl text-cente cursor-pointer hover:bg-white hover:text-black">
            {name}
        </button>
    )
}

export default Country