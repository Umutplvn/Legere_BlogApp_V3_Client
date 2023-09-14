import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { profileBox } from '../styles/globalStyles';

const Profile = () => {

  const{user}=useSelector((state)=>state.auth)

  return (
<Box sx={{height:"110vh", backgroundColor:"rgb(247, 253, 255)", padding:"6rem 0"}}>

    <Box sx={profileBox}>
      <Avatar sx={{width:"8rem", height:"8rem"}} src={user.image}/>
      <Typography><span style={{fontWeight:"700", color:"#BB2525"}}>Username: </span> {user.username}</Typography>
      <Typography><span style={{fontWeight:"700", color:"#BB2525"}}>First Name: </span>{user.first_name.toLocaleUpperCase()}</Typography>
      <Typography><span style={{fontWeight:"700", color:"#BB2525"}}>Last Name: </span>{user.last_name.toLocaleUpperCase()} </Typography>
      <Typography><span style={{fontWeight:"700", color:"#BB2525"}}>Email: </span>{user.email} </Typography>
      <Typography><span style={{fontWeight:"700", color:"#BB2525"}}>About me: </span>{user.bio} </Typography>

    </Box>
</Box>

  )
}

export default Profile