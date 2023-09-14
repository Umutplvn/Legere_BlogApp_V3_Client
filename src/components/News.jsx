import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Link, Paper } from '@mui/material';
import newsImg from "../assets/news.jpeg"
import { btnLead } from '../styles/globalStyles';

const News = ({news})=> {

  return (
    <Box container height={"100vh"} sx={{backgroundColor:"#d8e6f4", overflow:"scroll"}}  >
    <Grid container  >
      {news?.map((item, index)=>(
    <Box
    key={index}
    sx={{ minWidth: "280px", height: "500px", padding: "1rem", m:"1rem auto" }}
  >
    <Paper
      elevation={3}
      sx={{
        color: "black",
        "&:hover": { backgroundColor: "#eef8fa" },
        transition: "0.3s",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
       
      }}
    >
      <Box height={"200px"} padding={"0.5rem"} textAlign={"center"}>
        <img
        src={item?.urlToImage ||  newsImg}
          height={"180px"}
          style={{
           padding:"1rem",
            aspectRatio: "4/3",
            objectFit: "contain",
            
          }}
        />
      </Box>

      <Typography
        component={"h4"}
        variant="h5"
        fontWeight={"600"}
        sx={{ textAlign: "center" }}
      >
        {item.title}
      </Typography>

      {/* Content Text */}
      <Box padding={"0.5rem"}>
        <Typography
          height={"80px"}
          textOverflow="ellipsis"
          sx={{ overflow: "hidden", whiteSpace: "pre" }}
        >
          {item.description}
        </Typography>
      </Box>
      {/* Content User Info */}
  

   
        <Box  sx={{display:'flex', justifyContent:"end"}}> 
        <Link href={item.url} target="_blank">
          <Button 
          sx={btnLead}
          >
            See More
          </Button>
          
          </Link>
         
          
        </Box>
     
    </Paper>
  </Box>
      ))}
    
    </Grid>
  </Box>
  );
}

export default News