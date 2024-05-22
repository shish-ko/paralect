import { Button, Divider, Modal, Rating, Stack, Text } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { useAppSelector } from "helpers/customHooks";
import { IUserRates } from "interfaces";
import { useEffect, useState } from "react";

interface IRateModal {
  isOpen: boolean;
  filmTitle: string;
  filmId: number;
  closeHandler: ()=>void;
}

export const RateModal: React.FC<IRateModal> = ({isOpen, filmTitle, filmId, closeHandler}) => {
  const [ratings, saveRatings] = useLocalStorage<IUserRates[]>({key: 'userRatings', defaultValue: []});
  const [filmRate, setFilmRate] = useState<number>();
  const personalRate = ratings.find((r)=>r.filmId === filmId);

  useEffect(()=>{
    setFilmRate(personalRate?.rate);
  }, [personalRate?.rate]);

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
    closeHandler();
  };

  const removeHandler =() => {
    saveRatings(ratings.filter((rate=>rate.filmId !== filmId)));
    closeHandler();
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
            {personalRate && <Button onClick={removeHandler}>Remove rate</Button>}
          </div>
        </Stack>
      </Modal>
    </>
  );
};
