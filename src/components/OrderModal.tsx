import { Button, FocusTrap, Modal, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

export function OrderModal() {
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

    return (
        <>
            <Modal opened={opened} onClose={close} title="Заказ">
                <FocusTrap.InitialFocus />

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
                    <Button type="submit" w={'100%'} mt="sm" className='block mx-auto'>
                        Оформить
                    </Button>
                </form>
            </Modal>
            <Button onClick={open} color="#3a539d" h={40}>Перейти к оформлению</Button>
        </>
    );
}