import { Avatar, Box, Divider, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"
import { MEDIA_URL } from "constants";
import { IFilmData_L } from "interfaces";
import defaultIcon from '~assets/clapperboard.png';

export const FilmDetails: React.FC<Pick<IFilmData_L, 'videos' | 'overview' | 'production_companies'>> = ({ videos, overview, production_companies }) => {
  return (
    <Paper radius={12}>
      <Stack p={24} gap={20}>
        <Box>
          {videos.results[0] ?
            <>
              <Title order={3} mb={16}>Trailer</Title>
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videos.results[0].key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            </>
            :
            <Title order={3}>No Trailer</Title>
          }
        </Box>
        <Divider />
        <Box>
          <Title order={3} mb={16}>Description</Title>
          <Text>{overview}</Text>
        </Box>
        <Divider />
        <Stack>
          {production_companies.map((comp) =>
            <Group key={comp.name}>
              <Avatar bg={'gray.1'} src={MEDIA_URL+comp.logo_path} size={40} styles={{ image: { objectFit: 'contain' }, root: { border: '1px solid #F1F1F1' }, placeholder: { background: 'white' } }}>
                <Image src={defaultIcon} />
              </Avatar>
              {comp.name}
            </Group>)}
        </Stack>
      </Stack>
    </Paper>
  );
};
