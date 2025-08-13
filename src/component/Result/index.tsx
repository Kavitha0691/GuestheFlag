import { CountryType } from "@/utils/types"

type ResultProps = {
    outcome: string | undefined,
    country: string | undefined
} 

const Result = ({outcome, country}: ResultProps) => {
    return (
        <div data-testid= "result" className={`${outcome} p-6 text-center rounded-2xl border-2  text-black`}>
            {outcome === "right" ?
            <>
            <h3>Congratulations!!</h3>
            <p>you guessed the country correct</p>
            </>

            :
            <>
            <h3>Bad Luck!!</h3>
            <p>the flag belongs to {country}</p>
            </>
            }
        </div>
    )
}
export default Result