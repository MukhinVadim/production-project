import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useModal } from 'shared/ui/Modal/useModal';
import { Portal } from 'shared/ui/Portal';
import cls from './Modal.module.scss';

export type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen?: boolean;
  className?: string;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen = true,
  className,
  onClose,
}) => {
  const { onOverlayClick, onContentClick } = useModal({ onClose, isOpen });
  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          {/* //TODO: decompose to Overlay component */}
          <motion.div
            className={cls.overlay}
            initial={{
              opacity: 0,
              backdropFilter: 'blur(0px)',
            }}
            animate={{
              opacity: 1,
              backdropFilter: 'blur(5px)',
            }}
            exit={{
              opacity: 0,
              backdropFilter: 'blur(0px)',
            }}
            onClick={onOverlayClick}
            tabIndex={0}
            data-testid="overlay"
          >
            <motion.section
              className={classNames(cls.Modal, className)}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 50,
              }}
              onClick={onContentClick}
              role="dialog"
              data-testid="modal"
            >
              {children}
            </motion.section>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};
