import { Box, Button, Tabs } from '@mantine/core';
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCategoryId, handleIsCategor } from '../store/slice/slice';

export function SexTab() {
    const [activeTab, setActiveTab] = useState<string | null>('first');

    const dispach = useDispatch()
    const isCategor = useSelector(({ shop }: any) => shop.isCategor)

    const tagleIcon = () => {
        dispach(handleIsCategor(!isCategor))
    }

    const sexTab = [
        {
            name: 'Все',
            pos: 'first'
        },
        {
            name: 'Мужской',
            pos: 'second'
        },
        {
            name: 'Женский',
            pos: 'third'
        },
    ]

    return (
        <Box className='flex justify-between'>
            <Box onClick={tagleIcon} className='border-2 py-1 sm:hidden rounded-[4px] mr-3 px-3'>
                {isCategor ? <IconX /> : <IconMenu2 />}
            </Box>
            <Button onClick={tagleIcon} className='hidden sm:block' leftSection={isCategor ? <IconX size={18} /> : <IconMenu2 size={18} />} variant="default">
                Каталог товаров
            </Button>
            <Tabs className='w-full sm:w-[74%]' defaultValue="first" value={activeTab} onChange={setActiveTab}>
                <Tabs.List grow className='w-full' justify="center">
                    {sexTab.map(sex => {
                        return <Tabs.Tab onClick={() => sex.pos === 'first' && dispach(handleCategoryId(0))} className={`${activeTab === sex.pos && "border-colLight font-bold text-colLight"}`} key={sex.pos} value={sex.pos}>{sex.name}</Tabs.Tab>
                    }
                    )}
                </Tabs.List>
            </Tabs>
        </Box>
    )
}