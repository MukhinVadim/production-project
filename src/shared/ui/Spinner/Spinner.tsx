import cls from './Spinner.module.scss';

type SpinnerProps = {
    className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className }) => (
  <div className={cls.Spinner}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
