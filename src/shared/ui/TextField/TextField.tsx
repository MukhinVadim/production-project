import classNames from 'classnames';
import { forwardRef, memo, ReactNode, useId } from 'react';
import cls from './TextField.module.scss';

type TextFieldProps = {
  className?: string;
  label?: ReactNode;
} & JSX.IntrinsicElements['input'];

const TextFieldComponent = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      autoComplete = 'off',
      label,
      id,
      required,
      ...restProps
    } = props;
    const ownId = useId();

    const fieldId = `field-${ownId}:${id ?? ''}`;

    return (
      <div
        className={classNames(cls.TextField, className, {
          [cls.required]: required,
        })}
      >
        {label && (
          <label htmlFor={fieldId} className={cls.label}>
            {label}
          </label>
        )}
        <input
          {...restProps}
          ref={ref}
          id={fieldId}
          autoComplete={autoComplete}
          className={cls.input}
          required={required}
          data-testid="text-field"
        />
      </div>
    );
  }
);

export const TextField = memo(TextFieldComponent);
