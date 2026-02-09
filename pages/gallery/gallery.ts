import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GallerySection } from '../../components/gallery-section/gallery-section';

@Component({
	selector: 'app-gallery',
	imports: [GallerySection],
	templateUrl: './gallery.html',
	styleUrl: './gallery.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {}
