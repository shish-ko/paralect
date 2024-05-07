import { ActionIcon, useMantineTheme } from "@mantine/core";
import StarIcon from '~assets/star.svg?react';
import styles from './styles.module.scss';

interface IStarProps {
  isOrange?: boolean;
  isPurple?: boolean;
  isNotActive?: boolean;
  onClick?: ()=>void;
}
export const Star: React.FC<IStarProps> = ({ isOrange, isPurple, isNotActive, onClick }) => {
  const { colors } = useMantineTheme();
  const currentColor = isOrange ? colors.yellow[6] : isPurple ? colors.purple[6] : colors.gray[3];

  return (
    <ActionIcon variant="transparent" classNames={styles} disabled={isNotActive} onClick={onClick}>
      <StarIcon fill={currentColor}/>
    </ActionIcon>
  );
};
