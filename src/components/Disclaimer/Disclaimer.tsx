import { Center, Container, Divider, Image, Text } from "@mantine/core"; 
import mem_1 from '~assets/mem_1.webp';
import mem_2 from '~assets/mem_2.webp';

export const Disclaimer: React.FC =() => {
  return(
    <Center style={{flexDirection: 'column', gap: '20px'}}>
      <Container>
        <Text fz={40}>Hi!</Text>
        <Text> It takes some time for a back-end server to wake-up.</Text>
        <Text>Please, wait...</Text>
        <Text>... and have a look at a couple of memes</Text>
        <Divider my={10}/>
        <Image src={mem_1} w={600}/>
        <Divider my={10}/>
        <Image src={mem_2} w={600}/>
      </Container>

    </Center>
  );
};
