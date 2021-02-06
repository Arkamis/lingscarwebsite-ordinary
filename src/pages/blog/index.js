import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MainFeaturedPost from "../../modules/blog/MainFeature";
import SelectCars from "../../modules/SelectCar";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));
export default function Cars() {
  const classes = useStyles();

  return (
   <main>
      {/* <Container maxWidth="lg" className={classes.mainGrid}>
        <MainFeaturedPost post={} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              {mainFeaturedPost.title}
            </Typography>
            <Divider />
            <Markdown
              className={classes.markdown}
              children={markdownBody}
            />
          </Grid>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container> */}
    </main>
  );
}
