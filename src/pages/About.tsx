import { Box, Container, Title } from "@mantine/core"
import { useEffect, useState } from "react";

function About() {

  const [scrollTop, setScrollTop] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <Container size={1200} mt={20} pt={100}>
      <Box className="relative" h={10000}>
        <Box className="absolute z-10">
          <Title size={40} className="text-center">Добро пожаловать в наш интернет-магазин стильной одежды и модной обуви!</Title>
          <Box mt={20}>
            Мы - команда профессионалов, которые разделяют вашу страсть к моде и комфорту. Наш магазин - это место, где вы можете найти все, что нужно для создания неповторимого образа от головы до пят.

            В нашем ассортименте вы найдете широкий выбор одежды для различных случаев жизни - от повседневных нарядов до особых моментов. Мы следим за последними трендами и тщательно отбираем продукцию, чтобы предложить вам только лучшее качество и стиль.
            <br />
            Наш выбор обуви не оставит вас равнодушным. От элегантных каблуков до комфортных кроссовок, у нас есть все, чтобы удовлетворить ваш вкус и потребности.

            Мы гордимся нашим превосходным обслуживанием клиентов. Наша дружелюбная команда всегда готова помочь вам с выбором или ответить на любые вопросы. Ваше удовлетворение - наша главная цель.

            Спасибо, что выбрали нас для своих покупок. Мы надеемся, что ваше время в нашем магазине будет приятным и вдохновляющим. Добро пожаловать в мир стиля и комфорта!
            <br /> <br />
            С любовью,
            <br />
            Команда AmirShop
          </Box>
        </Box>
        <Box mt={scrollTop / 10} className={`absolute`}>
          <img width={700} src="image/home/обув.png" alt="" />
        </Box>
      </Box>

    </Container>
  )
}

export default About
