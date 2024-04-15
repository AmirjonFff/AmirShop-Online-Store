import { Container } from "@mantine/core";
import { useParams } from "react-router-dom";
import MySwiperDevice from "../components/SwiperDevice";
import { useGetDeviceIdQuery } from "../store/api/device";

function Device() {

    const { id } = useParams()
    console.log(id);

    // const { data, isLoading } = useGetDeviceIdQuery();
    console.log(useGetDeviceIdQuery());

    const images = ['https://imgcdn.loverepublic.ru/upload/images/33595/thumb/600_9999/3359544144_61_5.jpg', 'https://upload.leboutique.com/upload/media/category/kids-dress.jpg', 'https://imgcdn.loverepublic.ru/upload/images/33595/thumb/600_9999/3359544144_61_5.jpg', 'https://upload.leboutique.com/upload/media/category/kids-dress.jpg']


    return (
        <Container size={1200} className='pt-[80px]'>
            <div className="mt-10 flex w-full">
                <MySwiperDevice images={images} />
                <div>
                    <div>salom</div>
                </div>
            </div>
        </Container>

    )
}

export default Device
