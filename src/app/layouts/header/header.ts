import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeDensity, ThemeMode, ThemeRadius, ThemeService } from 'wacom';

@Component({
	selector: 'app-header',
	imports: [RouterLink, RouterLinkActive, CommonModule],
	templateUrl: './header.html',
	styleUrl: './header.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
	isMenuOpen = false;

	readonly theme = inject(ThemeService);

	readonly modes: readonly (ThemeMode | string)[] = ['light', 'dark', 'itkp'] as const;
	readonly densities: readonly ThemeDensity[] = ['comfortable', 'compact'] as const;
	readonly radiuses: readonly ThemeRadius[] = ['rounded', 'square'] as const;

	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

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
