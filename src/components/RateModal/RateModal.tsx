import { Button, Divider, Modal, Rating, Stack, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IFilmData_S, IUserRates } from "interfaces";
import { useEffect, useState } from "react";

interface IRateModal {
  isOpen: boolean;
  filmData: IFilmData_S;
  closeHandler: ()=>void;
}

export const RateModal: React.FC<IRateModal> = ({isOpen, filmData, closeHandler}) => {
  const [ratings, saveRatings] = useLocalStorage<IUserRates[]>({key: 'userRatings', defaultValue: []});
  const [filmRate, setFilmRate] = useState<number>();
  const personalRate = ratings.find((r)=>r.id === filmData.id);

  useEffect(()=>{
    setFilmRate(personalRate?.userRate);
  }, [personalRate?.userRate]);

  const modalCloseHandler= () => {
    setFilmRate(personalRate?.userRate);
    closeHandler();
  };

  const saveHandler = () => {
    if(filmRate) {
      if(personalRate) {
        personalRate.userRate=filmRate;
        saveRatings(ratings);
      } else {
        saveRatings([...ratings, {...filmData, userRate: filmRate}]);
      }
    }
    closeHandler();
  };

  const removeHandler =() => {
    saveRatings(ratings.filter((rate=>rate.id !== filmData.id)));
    closeHandler();
  };

  return (
    <>
      <Modal opened={isOpen} onClose={modalCloseHandler} title='Your rating' size={'sm'} centered>
        <Divider />
        <Stack gap={16} py={16}>
          <Text fw={700}>{filmData.original_title}</Text>
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
