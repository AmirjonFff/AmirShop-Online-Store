import { Box, Container, Stack, Text, Title } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram } from '@tabler/icons-react';
import Logo from '../Logo';
import classes from './FooterLinks.module.css';

const data = [
    {
        title: 'Категории',
        links: [
            { label: 'Features', link: '#' },
            { label: 'Pricing', link: '#' },
            { label: 'Support', link: '#' },
            { label: 'Forums', link: '#' },
        ],
    },
    {
        title: 'Project',
        links: [
            { label: 'Contribute', link: '#' },
            { label: 'Media assets', link: '#' },
            { label: 'Changelog', link: '#' },
            { label: 'Releases', link: '#' },
        ],
    },
    {
        title: 'Контакты',
        links: [
            { label: '+992 91 744 7517', link: '#' },
            { label: '@aking_0102', link: '#' },
            { label: 'amirjonif@gmail.com', link: '#' },
            { label: 'AmirjonFff', link: '#' },
        ],
    },
];

export function Footer() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
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
        <Box className='border-t' mt={'xl'}>
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
                            <IconBrandTelegram size={40} className='text-colLight cursor-pointer' />
                            <IconBrandInstagram size={40} className='text-colLight cursor-pointer' />
                            <IconBrandFacebook size={40} className='text-colLight cursor-pointer' />
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
