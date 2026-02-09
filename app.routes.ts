import { Routes } from '@angular/router';
import { Public } from './layouts/public/public';
import { Content } from './pages/content/content';
import { Form } from './pages/form/form';
import { Gallery } from './pages/gallery/gallery';
import { Home } from './pages/home/home';
import { ProfileComponent } from './pages/profile/profile';
import { Table } from './pages/table/table';
import { ListItemsComponent } from './pages/list/list-item/list-item';

export const routes: Routes = [
	{
		path: '',
		component: Public,
		children: [
			{path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: Home },
			{ path: 'list', component: ListItemsComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'form', component: Form },
			{ path: 'table', component: Table },
			{ path: 'gallery', component: Gallery },
			{ path: 'content', component: Content },
		],
	},
];
