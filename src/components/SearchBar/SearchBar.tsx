import { Button, Group, TextInput, Title } from "@mantine/core";
import styles from './styles.module.scss';

export const SearchBar: React.FC = () => {
  return (
    <Group justify="space-between">
      <Title order={2}>Movies</Title>
      <TextInput 
        // rightSectionPointerEvents="none"
        rightSection={<Button size="xs">Search</Button>}
        placeholder="Your email"
        rightSectionWidth={109}
        classNames={styles}
        // size="md"
      />
    </Group>
  );
};
