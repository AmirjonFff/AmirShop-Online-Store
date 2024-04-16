import { Tabs } from "@mantine/core"

interface IDeviceFollowTab {
    description: string | undefined
}

function DeviceFollowTab({ description }: IDeviceFollowTab) {
    return (
        <div className="mt-16">
            <Tabs color="teal" defaultValue="first">
                <Tabs.List className="text-[16px]">
                    <Tabs.Tab className="text-[16px]" value="first" color="#3a539d">Описание</Tabs.Tab>
                    <Tabs.Tab className="text-[16px]" value="second" color="#3a539d">
                        Отзывы (130)
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="first" pt="xs">
                    {description}
                </Tabs.Panel>
                <Tabs.Panel value="second" pt="xs">
                    {description}
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default DeviceFollowTab
