import type { ComponentMeta, StoryFn } from '@storybook/react';

import { useToggle } from 'shared/lib/hooks/useToggle';
import { Button } from 'shared/ui/Button';
import { Modal, ModalProps } from './Modal';

export default {
  component: Modal,
  title: 'UI/Modal',
  parameters: {
    loki: { skip: true },
  },
} as ComponentMeta<typeof Modal>;

const StoryModal: React.FC<ModalProps> = (props) => {
  const [isModal, toggleModal] = useToggle();
  return (
    <>
      <Button onClick={toggleModal}>Open modal</Button>
      <Modal {...props} isOpen={isModal} onClose={toggleModal} />
    </>
  );
};

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

const TemplateWithButton: StoryFn<ModalProps> = (args) => (
  <StoryModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
  doloremque reprehenderit laborum laudantium quos voluptas, nostrum beatae ea
    exercitationem ut vero reiciendis sit. Architecto placeat repellat illo accusamus
     laudantium consequuntur!`,
};

export const WithButton = TemplateWithButton.bind({});

WithButton.args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
   doloremque reprehenderit laborum laudantium quos voluptas, nostrum beatae ea
     exercitationem ut vero reiciendis sit. Architecto placeat repellat illo accusamus
      laudantium consequuntur!`,
};
