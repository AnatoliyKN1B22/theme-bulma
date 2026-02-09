import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeDensity, ThemeMode, ThemeRadius, ThemeService } from 'wacom';

@Component({
	selector: 'app-footer',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './footer.html',
	styleUrl: './footer.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	year = new Date().getFullYear();

	readonly theme = inject(ThemeService);

	readonly pages = [
		{ label: 'Home', link: '/home' },
		{ label: 'List', link: '/list' },
		{ label: 'Profile', link: '/profile' },
		{ label: 'Form', link: '/form' },
		{ label: 'Table', link: '/table' },
		{ label: 'Gallery', link: '/gallery' },
		{ label: 'Content', link: '/content' },
	] as const;

	readonly modes: readonly (ThemeMode | string)[] = ['light', 'dark', 'itkp'] as const;
	readonly densities: readonly ThemeDensity[] = ['comfortable', 'compact'] as const;
	readonly radiuses: readonly ThemeRadius[] = ['rounded', 'square'] as const;

	setMode(mode: ThemeMode | string) {
		this.theme.setMode(mode as ThemeMode);
	}
	setDensity(density: ThemeDensity) {
		this.theme.setDensity(density);
	}
	setRadius(radius: ThemeRadius) {
		this.theme.setRadius(radius);
	}
}
