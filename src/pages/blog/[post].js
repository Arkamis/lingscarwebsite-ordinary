import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MainFeaturedPost from "../../modules/blog/MainFeature";
import FeaturedPost from "../../modules/blog/FeaturedPost";
import Sidebar from "../../components/SideBar";
import MainBlog from "../../modules/blog/MainBlog";
import { Container, Divider, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import matter from "gray-matter";
import Markdown from "../../components/Markdown";
// import oct2 from '../../data/content/oct2019.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

const mainFeaturedPost = {
  title: "LINGsCARs AMAZING BLOG",
  description: "Radioactive noodle news straight from Ling Valentine, WAH!",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "enault Kangoo Ze pollution changed",
    date: "Nov 12",
    description:
      "Making your car greener is important, so it is nice when you can do it just by looking ...",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Nissan Qashqai Lease delivered",
    date: "Nov 11",
    description:
      "I always ask my customers if they have comments about getting their new car. Really, I ...)",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description: `Boss: Ling Valentine MSc IoD
15 Riverside Studios
Newcastle Business Park
Newcastle upon Tyne, NE4 7YL
Tel 0191 460 9444
Fax 0870 486 1130`,
  archives: [
    { title: "March 2020", url: "/blog/march2019" },
    { title: "February 2020", url: "/blog/feb2019" },
    { title: "January 2020", url: "/blog/jan2019" },
    { title: "November 1999", url: "/blog/nov2019" },
    { title: "October 1999", url: "/blog/oct2019" },
    { title: "September 1999", url: "/blog/sep2019" },
    { title: "August 1999", url: "/blog/aug2019" },
    { title: "July 1999", url: "/blog/jul2019" },
    { title: "June 1999", url: "/blog/jun2019" },
    { title: "April 2019", url: "/blog/apr2019" },
  ],
  social: [
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/LINGsCARS",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: "https://www.facebook.com/lingscars/",
    },
  ],
};

export default function Blog(props) {
  const classes = useStyles();
  const markdownBody = props.content;

  return (
    <main>
      <Container maxWidth="lg" className={classes.mainGrid}>
        <MainFeaturedPost post={mainFeaturedPost} />
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
      </Container>
    </main>
  );
}

Blog.getInitialProps = async (context) => {
  const { post } = context.query;
  console.log('Blog gotted:', post)
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../data/content/${post}.md`);
  const data = matter(content.default);

  return { ...data };
};

