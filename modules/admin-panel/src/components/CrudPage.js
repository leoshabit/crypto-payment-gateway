import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import NavDrawer from './partial/NavDrawer';
import CrudTable from './partial/CrudTable';

import withAuth from './partial/withAuth';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		height: '100vh'
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center'
	},
	wrapper: {
		padding: theme.spacing(3),
		margin: theme.spacing(5),
		position: 'absolute',
		top: '64px',
		width: '80vw'
	}
}));

function CrudPage({ title, columns, isEditable, isDeletable, endpoint, uidField })
{
	const classes = useStyles();

	return (

		<div className={ classes.root }>
			<NavDrawer />
			<Container className={ classes.container } fixed>
				<div className={ classes.wrapper }>
					<CrudTable
						uidField={ uidField }
						endpoint={ endpoint }
						title={ title }
						columns={ columns }
						isEditable={ isEditable }
						isDeletable={ isDeletable }
						/>
					</div>
			</Container>
		</div>

	);
}

CrudPage.propTypes = {
	isEditable: PropTypes.func,
	isDeletable: PropTypes.func,
	title: PropTypes.string.isRequired,
	columns: PropTypes.array.isRequired,
	endpoint: PropTypes.string.isRequired
};

export default CrudPage;