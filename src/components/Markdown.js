import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "./Link";
import Image from 'next/image';

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
});

const options = {
  overrides: {
    h1: {
      component: (props) => <Typography gutterBottom variant="h4" {...props} />,
    },
    h2: {
      component: (props) => <Typography gutterBottom variant="h6" {...props} />,
    },
    h3: {
      component: (props) => (
        <Typography gutterBottom variant="subtitle1" {...props} />
      ),
    },
    h4: {
      component: (props) => (
        <Typography gutterBottom variant="caption" paragraph {...props} />
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
      component: withStyles(styles)(({ classes, ...props }) => <img alt={props.alt}  {...props} className={classes.images} />)
    }
  },
};

function Markdown({classes, ...props}) {

    return <ReactMarkdown options={options} {...props} className={classes.root}/>;
}

export default withStyles(styles)(Markdown);
