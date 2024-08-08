import { Container, Typography } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
  return (
    <Container sx={{padding:"80px 0px"}}>
        <Typography  variant='h1' align='center' color={"error"}>
            404-:Page not Found
        </Typography>
    </Container>
  )
}

export default PageNotFound
