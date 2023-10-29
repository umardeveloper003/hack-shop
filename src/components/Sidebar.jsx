import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<List>
				<ListItem button>
					<ListItemIcon>
						<CategoryIcon />
					</ListItemIcon>
					<ListItemText primary='Категория 1' />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<CategoryIcon />
					</ListItemIcon>
					<ListItemText primary='Категория 2' />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<CategoryIcon />
					</ListItemIcon>
					<ListItemText primary='Категория 3' />
				</ListItem>
				{/* Добавьте дополнительные категории по мере необходимости */}
			</List>
			<Divider />
		</div>
	);
};

export default Sidebar;
