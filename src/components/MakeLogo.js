import { Paper, Typography } from "@material-ui/core";

export default function MakeLogo({ title, src}) {
    return (
        <Paper elevation={3}>
            <img src={src} alt={`${title} make logo`}></img>
            <Typography variant="subtitle2">{title}</Typography>
        </Paper>
    );
}