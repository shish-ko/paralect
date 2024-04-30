import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily: 'Inter',
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
    ]
  }
});
