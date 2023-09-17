import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Link, Paper } from '@mui/material';
import newsImg from "../assets/news.jpeg"
import { btnLead } from '../styles/globalStyles';

const News = ({news})=> {

  return (
    <Box container height={"100vh"} sx={{backgroundColor:"#d8e6f4", overflow:"scroll"}}  >
    <Grid container sx={{marginBottom:"3rem"}} >
      {news?.map((item, index)=>(
    <Box
    key={index}
    sx={{ minWidth: "280px", maxWidth:"280px", padding: "1rem", m:"1rem auto", }}
  >
    <Paper
      elevation={3}
      sx={{
        color: "black",
        "&:hover": { backgroundColor: "#eef8fa" },
        transition: "0.3s",
        padding:"0.5rem",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        height:"500px"    
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
        sx={{ textAlign:"center",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display:" -webkit-box",
        WebkitLineClamp: "4",
        WebkitBoxOrient: "vertical"}}
      >
        {item.title}
      </Typography>

 
  

   
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