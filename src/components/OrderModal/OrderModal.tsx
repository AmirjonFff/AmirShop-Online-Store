import { Box, Button, FocusTrap, Modal, Tabs, TextInput, Textarea, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import classes from './Demo.module.css';

export function OrderModal({ oplata, bool }: { oplata: number | undefined, bool?: boolean }) {
    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        mode: 'uncontrolled',
        validateInputOnChange: true,
        initialValues: { tel: '', address: '' },

        validate: {
            tel: (value) => ((value.length !== 9 || isNaN(Number(value))) ? '9 цифр' : null),
            address: (value) => (value.length < 20 ? 'короткый адрес' : null),
        },
    });

    form.getValues()

    return (
        <>
            <Modal opened={opened} onClose={close} title="Заказ">
                <FocusTrap.InitialFocus />

                <Box mb={15} className='flex justify-between'>
                    <Title px={0} size={18}>Итого: {oplata} c</Title>
                    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
                        <Tabs.List grow>
                            <Tabs.Tab
                                value="settings"
                            >
                                9:00
                            </Tabs.Tab>
                            <Tabs.Tab
                                value="messages"
                            >
                                13:00
                            </Tabs.Tab>
                            <Tabs.Tab
                                value="gallery"
                            >
                                16:00
                            </Tabs.Tab>
                        </Tabs.List>
                    </Tabs>
                </Box>

                <form onSubmit={form.onSubmit(console.log)}>
                    <TextInput
                        label="Телефон"
                        placeholder=""
                        type='tel'
                        key={form.key('tel')}
                        {...form.getInputProps('tel')}
                    />
                    <Textarea
                        mt="sm"
                        label="Адрес"
                        placeholder="Полный адрес"
                        key={form.key('address')}
                        {...form.getInputProps('address')}
                    />
                    <Button color='#3a539d' type="submit" w={'100%'} mt="sm">
                        Оформить
                    </Button>
                </form>
            </Modal>
            <Button onClick={open} variant={bool ? 'default' : ''} className={`${bool && 'border-colLight text-colLight -ml-2'}`} color="#3a539d" h={!bool ? 40 : 37}>{bool ? 'КУПИТ СЕЙЧАС' : 'Перейти к оформлению'}</Button>
        </>
    );
}