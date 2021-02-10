import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Menu, MenuItem } from '@material-ui/core'
import Toolbar, { styles  as toolbarSyles} from './Toolbar'
import Link from './Link'

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: 24,
	},
	placeholder: toolbarSyles(theme).root,
	toolbar: {
		justifyContent: 'space-between',
	},
	left: {
		flex: 1,
	},
	leftLinkActive: {
		color: theme.palette.common.white,
	},
	right: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	rightLink: {
		fontSize: 16,
		color: theme.palette.common.white,
		marginLeft: theme.spacing(3),
	},
	linkSecondary: {
		color: theme.palette.secondary.main,
	},
}))  

function AppAppBar(props) {

	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null)
  
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<AppBar position="fixed" elevation={0}>
				<Toolbar className={classes.toolbar}>
					<div className={classes.left} />
					<Link color={'inherit'} variant="h1" href={'/'}>
						{'LingsCar.com'}
					</Link>
					<div className={classes.right}>
						<Link
							component="button"
							href="/"
							variant="h6"
							aria-controls="simple-menu"
							aria-haspopup="true"
							type="link"
							className={classes.rightLink}
							color="inherit"
							onClick={handleClick}
						>
							{'Cars'}
						</Link>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							className={classes.rightLink}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>
								<Link href="/cars/">Look models</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link href="/cars/makeBudget">Make a Budget</Link>
							</MenuItem>
						</Menu>
						<Link
							className={classes.rightLink}
							color="inherit"
							variant="h6"
							href="/about"
						>
              About Us
						</Link>
						<Link
							className={classes.rightLink}
							color="inherit"
							variant="h6"
							href="/blog/apr2019"
						>
              Blog
						</Link>
						{/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"Sign Up"}
            </Link> */}
					</div>
				</Toolbar>
			</AppBar>
			<div className={classes.placeholder} />
		</>
	)
}

export default AppAppBar
