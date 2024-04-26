import { Box, Container, Select, Title } from "@mantine/core"
import { IconRefresh } from "@tabler/icons-react"
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import HomeDevices from "../components/ShopDevices"
import { useGetDeviceNameQuery } from "../store/api/device"
import { RootState } from "../store/store"
import { handleSearchValue } from "../store/slice/slice"

function Shop() {
  const { searchValue } = useSelector((state: RootState) => state.shop)
  const { data } = useGetDeviceNameQuery(searchValue)
  const dispatch = useDispatch()

  return (
    <Container size={1200}>
      {searchValue && <Box mt={40} className="flex justify-between items-center">
        <Title>Результаты поиска: "{searchValue}"</Title>
        <Title className="text-slate-500" size={20}> {data?.length} товара</Title>
        <Title className="flex items-center gap-3 text-slate-500" size={18}>Сортировать
          <Select
            placeholder="Выберите значение"
            data={['Наилучшие результаты', 'Сначала дорогие', 'Новинки', 'Сначала']}
            searchable
          /></Title>
        <IconRefresh className="cursor-pointer" onClick={() => dispatch(handleSearchValue(''))} />
      </Box>}
      <HomeDevices />
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
    </Container>
  )
}

export default Shop
