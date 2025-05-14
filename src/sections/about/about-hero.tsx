import { m, MotionProps } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import { MotionContainer, varFade } from 'src/components/animate';


// ----------------------------------------------------------------------

export default function AboutHero() {
  return (
    <Box
      sx={{
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundImage:
        //   'url(/assets/background/overlay_1.svg), url(/assets/hatdieu.png)',
          backgroundImage:
          'url(/assets/hatdieu.png)',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: {
              xs: 'center',
              md: 'unset',
            },
          }}
        >
          {/* <TextAnimate text="Hạt Điều Tự Nhiên" variants={varFade().inRight} sx={{ color: 'primary.main' }} /> */}

          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'primary.main' }}>
            <TextAnimate text="Hạt" />
            <TextAnimate text="Điều" />
            <TextAnimate text="Tự" />
            <TextAnimate text="Nhiên" />
          </Stack>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: 'common.white',
                fontWeight: 'fontWeightSemiBold',
              }}
            >
              Nguồn dinh dưỡng dồi dào, 
              <br /> hương vị thơm ngon khó cưỡng.
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TextAnimateProps = BoxProps &
  MotionProps & {
    text: string;
  };

function TextAnimate({ text, variants, sx, ...other }: TextAnimateProps) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
