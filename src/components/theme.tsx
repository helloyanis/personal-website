"use client";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    colorSchemes: {
        light: {
          palette: {
            primary: {
              main: '#db965f',
            },
          }
        },
        dark: {
            palette: {
                primary: {
                    main: '#db965f'
                    }
                  }
                }
              }

})

export default function Theme({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }