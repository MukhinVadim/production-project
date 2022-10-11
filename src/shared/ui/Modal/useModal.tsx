import { useCallback, useEffect } from 'react';

export type UseModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const useModal = (props: UseModalProps) => {
  const { onClose, isOpen } = props;

  const onOverlayClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const onContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', onKeydown);
    return () => {
      document.removeEventListener('keydown', onKeydown);
    };
  }, [onKeydown, isOpen]);

  return {
    onOverlayClick,
    onContentClick,
  };
};
