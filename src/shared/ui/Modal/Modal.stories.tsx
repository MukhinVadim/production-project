import type { ComponentMeta, StoryFn } from '@storybook/react';

import { useToggle } from 'shared/lib/hooks/useToggle';
import { Button } from 'shared/ui/Button';
import { Modal, ModalProps } from './Modal';

export default {
  component: Modal,
  title: 'UI/Modal',
} as ComponentMeta<typeof Modal>;

const Template: StoryFn<ModalProps> = (args) => {
  const [isModal, toggleModal] = useToggle();
  return (
    <>
      <Button onClick={toggleModal}>Open modal</Button>
      <Modal {...args} isOpen={isModal} onClose={toggleModal} />
    </>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
   doloremque reprehenderit laborum laudantium quos voluptas, nostrum beatae ea
     exercitationem ut vero reiciendis sit. Architecto placeat repellat illo accusamus
      laudantium consequuntur!`,
};
