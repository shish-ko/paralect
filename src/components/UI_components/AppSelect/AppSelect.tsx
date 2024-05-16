import { MultiSelect, MultiSelectProps, ThemeIcon, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import DropIcon from '~assets/dropList.svg?react';
import styles from './appSelect.module.scss';

interface ISelectIconProps {
  isActive: boolean;
}

const SelectDropIcon: React.FC<ISelectIconProps> = ({ isActive }) => {
  const { colors } = useMantineTheme();

  return (
    <ThemeIcon styles={{ root: { transform: isActive ? 'rotate(180deg)' : 'none' } }}
      variant="white"
      color={isActive ? colors.purple[5] : colors.gray[5]}>
      <DropIcon />
    </ThemeIcon>
  );
};

export const AppSelect: React.FC<MultiSelectProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MultiSelect
      placeholder={props.placeholder ? props.placeholder : ''}
      withCheckIcon={false}
      {...props}
      classNames={{...props.classNames, pillsList: styles.pillsList}}
      rightSection={<SelectDropIcon isActive={isOpen} />}
      onDropdownOpen={() => setIsOpen(!isOpen)}
      onDropdownClose={() => setIsOpen(!isOpen)}
    />
  );
};
