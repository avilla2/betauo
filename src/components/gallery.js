import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Query from "./query";
import GALLERY_QUERY from "../queries/galleryQuery";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "50px",
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: 1200,
        height: 1200,
      },
}));

export default function Gallery() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
    <Typography variant="h2" gutterBottom>
        Gallery
     </Typography>
        <div className={classes.gallery}>
            <Query query={GALLERY_QUERY}>
            {({ data: { gallery } }) => {
              return (
                <ImageList rowHeight={500} className={classes.imageList} cols={3}>
                    {gallery.Images.map((item) => (
                    <ImageListItem key={item.id} cols={item.width >= 800 ? 2 : 1}>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}${item.url}`} alt={item.id} />
                    </ImageListItem>
                    ))}
                </ImageList>
              );
            }}
          </Query>
        </div>
    </div>
    );
}