import { Combobox, Group, InputBase, MultiSelect, MultiSelectProps, Text, ThemeIcon, useCombobox, useMantineTheme } from "@mantine/core";
import { Dispatch, SetStateAction, useState } from "react";
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


interface IAppSelectProps {
  data: string[],
  value: string[],
  setValue: Dispatch<SetStateAction<string[]>>,
  placeholder?: string
}
export const AppSelect: React.FC<IAppSelectProps> = ({ value, data, setValue, placeholder }) => {

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const options = data.map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)} classNames={styles}>
      {item}
    </Combobox.Option>
  ));

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  return (
    // <MultiSelect
    //   placeholder={placeholder ? (props.value?.length ? '' : placeholder) : ''}
    //   withCheckIcon={false}

    //   {...props}
    //   classNames={{...props.classNames, pillsList: styles.pillsList}}
    //   rightSection={<SelectDropIcon isActive={isOpen} />}
    //   onDropdownOpen={() => setIsOpen(!isOpen)}
    //   onDropdownClose={() => setIsOpen(!isOpen)}
    // />
    <Combobox
      onOptionSubmit={handleValueSelect}
      store={combobox}>
      <Combobox.Target>
        <InputBase
          multiline
          pointer
          rightSectionPointerEvents="none"
          component="button"
          type="button"
          rightSection={<SelectDropIcon isActive={combobox.dropdownOpened} />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value.length ? value.join(', ') : <Text c='gray.5' size="sm">{placeholder}</Text>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>{options}</Combobox.Dropdown>
    </Combobox>
  );
};
