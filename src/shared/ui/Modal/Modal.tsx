import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Portal } from 'shared/ui/Portal';
import cls from './Modal.module.scss';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  className,
  onClose,
}) => (
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
          onClick={onClose}
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
            onClick={(e) => e.stopPropagation()}
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
