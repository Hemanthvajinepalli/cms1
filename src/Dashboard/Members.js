import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <div style={{}}>
      <h3 style={{textAlign:"center" }}>Management</h3>
      <div style={{ display: 'flex' }}>
        <CardActionArea sx={{ display: 'flex',gap:"2%"}}>
          <div style={{ }}>
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHbN-BjNf_XKpFc6sZjUecXOA9DiF9ALGV_N5uTpF7w&s"
              alt=""
              sx={{ width: 100, height: 100, borderRadius: "50%" }} // Adjust the width and height as needed
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pastor
              </Typography>
            </CardContent>
          </div>
          <div style={{}}>
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHbN-BjNf_XKpFc6sZjUecXOA9DiF9ALGV_N5uTpF7w&s"
              alt=""
              sx={{ width: 100, height: 100, borderRadius: "50%" }} // Adjust the width and height as needed
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Father
              </Typography>
            </CardContent>
          </div>
          <div style={{}}>
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHbN-BjNf_XKpFc6sZjUecXOA9DiF9ALGV_N5uTpF7w&s"
              alt=""
              sx={{ width: 100, height: 100, borderRadius: "50%" }} // Adjust the width and height as needed
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Elder
              </Typography>
            </CardContent>
          </div>
          <div style={{ }}>
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHbN-BjNf_XKpFc6sZjUecXOA9DiF9ALGV_N5uTpF7w&s"
              alt=""
              sx={{ width: 100, height: 100, borderRadius: "50%" }} // Adjust the width and height as needed
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Volunteer
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
        

      </div>
    </div>
  );
}
