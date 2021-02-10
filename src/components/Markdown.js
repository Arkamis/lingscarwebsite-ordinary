import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "./Link";
import Image from 'next/image';
import { Divider } from "@material-ui/core";

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(4),
  },
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
  },
  images: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    objectFit: 'contain',
  },
  divider: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3),
  }
});

const options = {
  overrides: {
    h1: {
      component: (props) => <Typography gutterBottom variant="h4" component="h3" {...props} />,
    },
    h2: {
      component: (props) => <Typography gutterBottom variant="h6" component="h4" {...props} />,
    },
    h3: {
      component: (props) => (
        <Typography gutterBottom variant="subtitle1" component={"h5"} {...props} />
      ),
    },
    h4: {
      component: (props) => (
        <Typography gutterBottom variant="caption" paragraph component={"h6"} {...props} />
      ),
    },
    p: { component: withStyles(styles)(({ classes, ...props }) => <Typography paragraph variant="body1" className={classes.paragraph} {...props} />) },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
    img: {
      component: withStyles(styles)(({ classes, ...props }) => <img {...props} className={classes.images} />)
    },
    hr: { component: withStyles(styles)(({ classes, ...props }) => <Divider variant="middle" className={classes.divider} {...props}/>)}
  },
};

function Markdown({classes, ...props}) {

    return <ReactMarkdown options={options} {...props} className={classes.root}/>;
}

export default withStyles(styles)(Markdown);
