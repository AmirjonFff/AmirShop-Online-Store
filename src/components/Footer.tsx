import { Container, Text } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';
import Logo from './Logo';

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
            <div className="w-[150px]" key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <Container className={classes.footer} size={1200}>
            <footer className={`${classes.inner} border-[#3a539d84] border-t-[1px]`}>
                <div className={classes.logo}>
                    <div className="cursor-pointer text-xl font-bold mb-4">
                        <Logo />
                    </div>
                    <Text size="xs" c="dimmed" className={classes.description}>
                        Освежите свой стиль! Интернет-магазин модной одежды для смелых и стильных.
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
                <div>
                    <Text className={classes.title}>Мы в соцмедиа</Text>
                    <div className='flex gap-4'>
                        <IconBrandTelegram size={40} className='text-colLight cursor-pointer' />
                        <IconBrandInstagram size={40} className='text-colLight cursor-pointer' />
                        <IconBrandFacebook size={40} className='text-colLight cursor-pointer' />
                    </div>
                </div>
            </footer>
        </Container>
    );
}
