import { CountryType } from "@/utils/types"

const TargetCountry = ({name, image}: CountryType) => {
    return <img alt={name} src={image} />
}
export default TargetCountry