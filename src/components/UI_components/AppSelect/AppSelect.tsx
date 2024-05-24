import { Combobox, Input, InputBase, InputWrapperProps, ScrollArea, Text, ThemeIcon, useCombobox, useMantineTheme } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import DropIcon from '~assets/dropList2.svg?react';
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


type IAppSelectProps = {
  data: string[],
  value: string[],
  setValue: Dispatch<SetStateAction<string[]>>,
  placeholder?: string,
  multiSelect?: boolean,
} & InputWrapperProps

export const AppSelect: React.FC<IAppSelectProps> = ({ value, data, setValue, placeholder, multiSelect, ...inputProps }) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const options = data.map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)} >
      {item}
    </Combobox.Option>
  ));

  const handleValueSelect = (val: string) =>{
    if(multiSelect) {
      // inputProps
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    } else {
      setValue([val]);
    }
  };

  return (
    <Input.Wrapper {...inputProps}>
      <Combobox
        onOptionSubmit={handleValueSelect}
        classNames={styles}
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
        <Combobox.Dropdown>
          <ScrollArea.Autosize mah={150} scrollbarSize={4} type="auto">{options}</ScrollArea.Autosize>
        </Combobox.Dropdown>
      </Combobox>
    </Input.Wrapper>
  );
};
