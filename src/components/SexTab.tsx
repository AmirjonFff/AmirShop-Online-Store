import { Tabs } from '@mantine/core'
import { useState } from 'react';

export function CardsTab() {
    const [activeTab, setActiveTab] = useState<string | null>('first');

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
        <Tabs className='w-full' defaultValue="first" value={activeTab} onChange={setActiveTab}>
            <Tabs.List grow className='w-full' justify="center">
                {sexTab.map(sex =>
                    <Tabs.Tab className={`${activeTab === sex.pos && "border-colLight font-bold text-colLight"}`} key={sex.pos} value={sex.pos}>{sex.name}</Tabs.Tab>
                )}
            </Tabs.List>
        </Tabs>
    )
}