import { Button, FocusTrap, Modal, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

export function OrderModal() {
    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        mode: 'uncontrolled',
        validateInputOnChange: true,
        initialValues: { name: '', email: '', age: 0 },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
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
                        key={form.key('name')}
                        {...form.getInputProps('name')}
                    />
                    <Textarea
                        mt="sm"
                        label="Адрес"
                        placeholder=""
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    <Button type="submit" mt="sm">
                        Submit
                    </Button>
                </form>
            </Modal>
            <Button onClick={open} color="#3a539d" h={40}>Перейти к оформлению</Button>
        </>
    );
}