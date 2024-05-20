import { Button, Divider, Modal, Rating, Stack, Text } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { useAppSelector } from "helpers/customHooks";
import { useState } from "react";

interface IRateModal {
  isOpen: boolean;
  filmTitle: string;
  filmId: number;
  closeHandler: ()=>void;
}
interface IUserRates {
  filmId: number;
  rate: number
}
export const RateModal: React.FC<IRateModal> = ({isOpen, filmTitle, filmId, closeHandler}) => {
  const [ratings, saveRatings] = useLocalStorage<IUserRates[]>({key: 'userRatings', defaultValue: []});
  const personalRate = ratings.find((r)=>r.filmId === filmId);
  const [filmRate, setFilmRate] = useState(personalRate?.rate);
  console.log(ratings);

  const modalCloseHandler= () => {
    setFilmRate(personalRate?.rate);
    closeHandler();
  };

  const saveHandler = () => {
    if(filmRate) {
      if(personalRate) {
        personalRate.rate=filmRate;
        saveRatings(ratings);
      } else {
        saveRatings([...ratings, {filmId, rate: filmRate}]);
      }
    }
  };

  return (
    <>
      <Modal opened={isOpen} onClose={modalCloseHandler} title='Your rating' size={'sm'} centered>
        <Divider />
        <Stack gap={16} py={16}>
          <Text fw={700}>{filmTitle}</Text>
          <Rating value={filmRate} count={10} size={28} styles={{ root: { width: 'inherit', justifyContent: 'space-between' } }} onChange={setFilmRate} />
          <div>
            <Button mr={10} onClick={saveHandler}>Save</Button>
          </div>
        </Stack>
      </Modal>
    </>
  );
};
