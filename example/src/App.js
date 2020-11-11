import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import CurtainRevealBox from 'react-curtain-reveal-box'

const App = () => {
  return (
    <Box padding={2}>
      <Typography align="center" variant="h3">
        React Curtain Reveal Box Examples
          </Typography>
      <Grid container spacing={2} padding={2} >
        <Grid item xs={12} sm={4} l={3} style={{ height: 300, width: "100%" }}>
          <CurtainRevealBox>
            <Typography align="center">
              Default
          </Typography>
          </CurtainRevealBox>
        </Grid>
        <Grid item xs={12} sm={4} l={3} style={{ height: 300, width: "100%" }}>
          <CurtainRevealBox
            stayHidden={false}
          >
            <Typography align="center">
              Dont stay revealed
          </Typography>
          </CurtainRevealBox>
        </Grid>
        <Grid item xs={12} sm={4} l={3} style={{ height: 300, width: "100%" }}>
          <CurtainRevealBox
            onReveal={() => { console.log("revealed") }}
            onHide={() => { console.log("hide") }}
            stayHidden={false}
          >
            <Typography align="center">
              With event handlers and dont stay revealed
          </Typography>
          </CurtainRevealBox>
        </Grid>
        <Grid item xs={12} sm={4} l={3} style={{ height: 300, width: "100%" }}>
          <CurtainRevealBox
            animationConfig={{
              variant: "linear",
              speed: 5
            }}
            stayHidden={false}
          >
            <Typography align="center">
              Custom Animation and dont stay revealed
          </Typography>
          </CurtainRevealBox>
        </Grid>
        <Grid item xs={12} sm={4} l={3} style={{ height: 300, width: "100%" }}>
          <CurtainRevealBox
            styleConfig={{
              curtain: {
                borderRadius: 0,

              },
              leftPanel: {
                background: "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
              },
              rightPanel: {
                background: "linear-gradient(270deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
              },
              content: {
                backgroundColor: "rgba(34,193,195,1)"
              }
            }}
            stayHidden={false}
          >
            <Typography align="center">
              Custom Styling and dont stay revealed
          </Typography>
          </CurtainRevealBox>
        </Grid>
        <Grid item xs={12} sm={4} l={3} style={{ height: 300, width: "100%" }}>
          <CurtainRevealBox
            revealCheck={() => {
              return Math.random() <= 0.5;
            }}
            stayHidden={false}
          >
            <Typography align="center">
              RevealCheck (random) and dont stay revealed
          </Typography>
          </CurtainRevealBox>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
