import classNames from "classnames"
import { t } from "i18next"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button"
import cls from './LangSwitcher.module.scss'

type LangSwitcherProps = {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({className}) => {
  const {t, i18n} = useTranslation('translation')

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(cls.LangSwitcher, className)}
      onClick={toggle}
     >
      {t('language')}
    </Button>
  )
}