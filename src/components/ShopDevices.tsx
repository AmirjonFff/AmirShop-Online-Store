import { useSelector } from "react-redux"
import HomeCards from "./HomeCards"
import { SexTab } from "./SexTab"
import { RootState } from "../store/store"

function ShopDevices() {
    const { searchValue } = useSelector((state: RootState) => state.shop)
    return (
        <div className='mt-16'>
            {!searchValue && <SexTab />}
            <HomeCards />
        </div>
    )
}

export default ShopDevices
