import classNames from 'classnames';
import { forwardRef, memo } from 'react';
import cls from './Input.module.scss';

type InputProps = {
  // bag into eslint
  // eslint-disable-next-line react/no-unused-prop-types
  className?: string;
} & JSX.IntrinsicElements['input'];

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, autoComplete = 'off', ...restProps } = props;

    return (
      <input
        {...restProps}
        ref={ref}
        autoComplete={autoComplete}
        className={classNames(cls.Input, className)}
        data-testid="input"
      />
    );
  })
);
