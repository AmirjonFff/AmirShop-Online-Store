import { Box, Container } from "@mantine/core";
import { useParams } from "react-router-dom";
import DeviceFollow from "../components/DeviceFollow";
import MySwiperDevice from "../components/SwiperDevice";
import { useGetDeviceIdQuery } from "../store/api/device";
import DeviceFollowTab from "../components/DeviceFollowTab";

function Device() {

    const { id } = useParams()
    const { data, isLoading } = useGetDeviceIdQuery(Number(id));
    console.log(data);

    return (
        <Container size={1200} className='py-5 md:pt-[80px]'>
            <Box className="sm:mt-10 flex gap-16 flex-col sm:flex-row">
                <MySwiperDevice images={data?.images} />
                <DeviceFollow isLoading={isLoading} data={data} />
            </Box>
            <DeviceFollowTab description={data?.description} />

        </Container>

    )
}

export default Device
