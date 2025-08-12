'use client'
import Header from "@/component/Header";
import Country from "@/component/Country"
import { countries} from "@/data/countries"
import { useEffect, useState } from "react";
import { CountryType } from "@/utils/types";
import TargetCountry from "@/component/TargetCountry";
import Result from "@/component/Result";

export default function Home() {
  const [targetCountry, setTargetCountry] = useState<CountryType | null>(null)
  const [userGuess, setUserGuess] = useState<string | null> (null)
  const [result, setResult] = useState<string | null> (null)

  useEffect(() => {
       setTargetCountry(countries[Math.floor(Math.random() * countries.length)])
  }, [])

  useEffect( () => {
     if (!userGuess || !targetCountry) {
      setResult(null)
     } else {
      setResult(userGuess === targetCountry.name ? "right" : "wrong")
     }
  }, [userGuess])

  const handleClick = (name: string) => {
    setUserGuess(name)
  }
  
  return (
    <div className="font-sans max-w-3xl m-auto my-6">
      < Header />
      {/* <p>{userGuess} --- {result}</p> */}
      
      {targetCountry && <TargetCountry {...targetCountry} />}
      <section className="flex justify-between max-w-2xl m-auto">
      {countries.map((item, index) => <Country key = {index} {...item} updateFunction={handleClick}/>)}
      {userGuess && <Result outcome={result ?? ""} country={targetCountry?.name} />}
      </section>
    </div>
  );
}
