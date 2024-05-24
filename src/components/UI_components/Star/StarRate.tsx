import { ActionIcon, Group, Text, useMantineTheme } from "@mantine/core";
import StarIcon from '~assets/star.svg?react';
import styles from './styles.module.scss';

interface IStarProps {
  rating?: string | number;
  clickHandler?: () => void;
  vote_count?: number;
}
export const StarRate: React.FC<IStarProps> = ({ vote_count, clickHandler, rating }) => {
  const { colors } = useMantineTheme();
  const currentColor = clickHandler ? (rating ? colors.purple[5] : colors.gray[3]) : colors.yellow[6];

  return (
    <Group gap={0} wrap="nowrap" align="center">
      <ActionIcon variant="transparent" classNames={styles} disabled={!clickHandler} onClick={clickHandler && ((e)=> { e.preventDefault(); clickHandler();})}>
        <StarIcon fill={currentColor} width={30} height={30}/>
      </ActionIcon>
      {rating && <Text span fw={600} ml={4}>{rating}</Text>}
      {vote_count && <Text span c='gray.6' ml={8}>({vote_count})</Text>}
      
    </Group>
  );
};
