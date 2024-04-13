import { Button, Tabs } from '@mantine/core';
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleIsCategor } from '../store/slice/slice';

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
        <div className='flex justify-between'>
            <Button onClick={tagleIcon} leftSection={isCategor ? <IconX size={18} /> : <IconMenu2 size={18} />} variant="default">
                Каталог товаров
            </Button>
            <Tabs className='w-[74%]' defaultValue="first" value={activeTab} onChange={setActiveTab}>
                <Tabs.List grow className='w-full' justify="center">
                    {sexTab.map(sex =>
                        <Tabs.Tab className={`${activeTab === sex.pos && "border-colLight font-bold text-colLight"}`} key={sex.pos} value={sex.pos}>{sex.name}</Tabs.Tab>
                    )}
                </Tabs.List>
            </Tabs>
        </div>
    )
}