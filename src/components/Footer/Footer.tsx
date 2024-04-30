import { Box, Container, Stack, Text, Title } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram } from '@tabler/icons-react';
import Logo from '../Logo';
import classes from './FooterLinks.module.css';
import { useGetCategoriesQuery } from '../../store/api/device';



export function Footer() {

    const { data: dataCategor } = useGetCategoriesQuery()

    const data = [
        {
            title: 'Категории',
            links: [
                { label: dataCategor && dataCategor[0].name, link: '#' },
                { label: dataCategor && dataCategor[1].name, link: '#' },
                { label: dataCategor && dataCategor[2].name, link: '#' },
                { label: dataCategor && dataCategor[3].name, link: '#' },
            ],
        },
        {
            title: 'Project',
            links: [
                { label: 'amir-my-portfolio', link: '#' },
                { label: 'avesto-jobs-front-admin', link: '#' },
                { label: 'af-online-store', link: '#' },
            ],
        },
        {
            title: 'Контакты',
            links: [
                { label: '+992 91 744 7517', link: '#' },
                { label: '@aking_0102', link: 'https://web.telegram.org/k/#@aking_0102' },
                { label: 'amirjonif@gmail.com', link: '#' },
                { label: 'AmirjonFff', link: '#' },
            ],
        },
    ];

    const navLink = (link: string) => {
        window.location.href = link;
    };

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                href={link.link}
                key={index}
                className={`${classes.link} cursor-pointer`}
                component="a"
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <Stack gap={0} className="w-[150px]" key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </Stack>
        );
    });

    return (
        <Box className='border-t'>
            <Container className={classes.footer} size={1200}>
                <Box className={`${classes.inner} border-[#3a539d84] border-t-[1px]`}>
                    <Stack gap={0} className={classes.logo}>
                        <Box className="cursor-pointer text-xl font-bold mb-4">
                            <Logo />
                        </Box>
                        <Title size="xs" c="dimmed" className={classes.description}>
                            Освежите свой стиль! Интернет-магазин модной одежды для смелых и стильных.
                        </Title>
                    </Stack>
                    <Box className={classes.groups}>{groups}</Box>
                    <Stack gap={4}>
                        <Title className={classes.title}>Мы в соцмедиа</Title>
                        <Box className='flex gap-4'>
                            <IconBrandTelegram onClick={() => navLink('https://web.telegram.org/k/#@aking_0102')} size={40} className='text-colLight cursor-pointer' />
                            <IconBrandInstagram onClick={() => navLink('https://www.instagram.com/amin.khuroson/')} size={40} className='text-colLight cursor-pointer' />
                            <IconBrandFacebook onClick={() => navLink('https://www.facebook.com/')} size={40} className='text-colLight cursor-pointer' />
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
