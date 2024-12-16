import { Switch } from "react-aria-components";
import { useTranslation } from "react-i18next";

interface Props {
  label: string;
  value: boolean;
  defaultValue: boolean;
  onChange: (e: boolean) => void;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

export const SwitchInput = ({
  label,
  value,
  defaultValue = false,
  onChange,
  name,
  disabled = false,
  readOnly = false,
  className,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Switch
      id={name}
      name={name}
      className={`text-white dark:text-white ${className}`}
      defaultSelected={defaultValue}
      isSelected={value}
      isDisabled={disabled}
      isReadOnly={readOnly}
      onChange={onChange}
    >
      <div className="indicator" />
      {t(label)}
    </Switch>
  );
};
