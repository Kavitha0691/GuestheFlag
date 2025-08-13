import { CountryType } from "@/utils/types"

const TargetCountry = ({name, image}: CountryType) => {
    return <img data-testid="target-country" alt={name} src={image} />
}
export default TargetCountry