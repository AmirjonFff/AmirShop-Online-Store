import { Box, Button, Container, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate()

  // const [scrollTop, setScrollTop] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollTop(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);





  return (
    <Container size={1200} mt={70}>
      <Box className="relative">
        <Box className="absolute z-10">
          <Title size={50} className="text-center uppercase">Добро пожаловать в наш <br /> интернет-магазин стильной одежды <br /> и модной обуви!</Title>
          <Box mt={20}>
            <Text className="text-lg">
              <span className="w-10 inline-block"></span> Мы - команда профессионалов, которые разделяют вашу страсть к моде и комфорту. Наш магазин - это место, где вы можете найти все, что нужно для создания неповторимого образа от головы до пят.

              В нашем ассортименте вы найдете широкий выбор одежды для различных случаев жизни - от повседневных нарядов до особых моментов. Мы следим за последними трендами и тщательно отбираем продукцию, чтобы предложить вам только лучшее качество и стиль.

              <br />
              <br />
              <span className="w-10 inline-block"></span> Наш выбор обуви не оставит вас равнодушным. От элегантных каблуков до комфортных кроссовок, у нас есть все, чтобы удовлетворить ваш вкус и потребности.

              Мы гордимся нашим превосходным обслуживанием клиентов. Наша дружелюбная команда всегда готова помочь вам с выбором или ответить на любые вопросы. Ваше удовлетворение - наша главная цель.

              Спасибо, что выбрали нас для своих покупок. Мы надеемся, что ваше время в нашем магазине будет приятным и вдохновляющим. Добро пожаловать в мир стиля и комфорта!
              <br /> <br />
              С любовью,
              <br />
              Команда <span className="font-bold">AmirShop</span>
            </Text>
            <Box className="flex flex-col items-center mt-10">
              <Title size={14} mt={5}>Найдите то, что вам нужно в каталоге или при помощи поиска</Title>
              <Button onClick={() => navigate('/shop')} mt={10} variant="default">Вернуться к покупкам</Button>
            </Box>
          </Box>
        </Box>
        {/* <Box mt={scrollTop / 10} className={`absolute`}>
          <img width={700} src="image/home/обув.png" alt="" />
        </Box> */}
      </Box>

    </Container>
  )
}

export default About
