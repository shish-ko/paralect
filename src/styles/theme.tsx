import { Container, createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily: 'Inter',
  black: '#232134',
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
  headings: {
    sizes: {
      h1: {
        fontWeight: '600',
        fontSize: rem(24),
      },
      h2: {
        fontSize: rem(32),
        lineHeight: '1.4',
        fontWeight: 'bold',
      },
      h3: {
        lineHeight: '1',
        fontSize: rem(20),
      }
    }
  },
  colors: {
    purple: [
      "#f5edff",
      "#F2ECFA",
      "#E5D5FA",
      "#D1B4F8",
      "#BD93F7",
      "#9854F6",
      "#541F9D",
      "#6526bc",
      "#5a21a8",
      "#4d1b95"
    ],
    gray: [
      "#F8F9FA",
      "#F5F5F6",
      "#EAEBED",
      "#D5D6DC",
      "#ADB5BD",
      "#ACADB9",
      "#7B7C88",
      "#495057",
      "#343A40",
      "#212529"
    ],
    yellow: [
      "#fff9e1",
      "#fff0cd",
      "#fde09d",
      "#fccf67",
      "#fbc13b",
      "#fab720",
      "#fab005",
      "#df9d00",
      "#c78b00",
      "#ac7700"
    ]
  }
});

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(1440),
};
