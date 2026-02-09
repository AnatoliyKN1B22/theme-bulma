import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-gallery-section',
	imports: [],
	templateUrl: './gallery-section.html',
	styleUrl: './gallery-section.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GallerySection {
	images = [
		{ url: 'https://picsum.photos/id/10/800/600', thumb: 'https://picsum.photos/id/10/400/300' },
		{ url: 'https://picsum.photos/id/11/800/600', thumb: 'https://picsum.photos/id/11/400/300' },
		{ url: 'https://picsum.photos/id/12/800/600', thumb: 'https://picsum.photos/id/12/400/300' },
		{ url: 'https://picsum.photos/id/13/800/600', thumb: 'https://picsum.photos/id/13/400/300' },
		{ url: 'https://picsum.photos/id/14/800/600', thumb: 'https://picsum.photos/id/14/400/300' },
		{ url: 'https://picsum.photos/id/15/800/600', thumb: 'https://picsum.photos/id/15/400/300' },
		{ url: 'https://picsum.photos/id/16/800/600', thumb: 'https://picsum.photos/id/16/400/300' },
		{ url: 'https://picsum.photos/id/17/800/600', thumb: 'https://picsum.photos/id/17/400/300' },
		{ url: 'https://picsum.photos/id/18/800/600', thumb: 'https://picsum.photos/id/18/400/300' },
		{ url: 'https://picsum.photos/id/19/800/600', thumb: 'https://picsum.photos/id/19/400/300' },
		{ url: 'https://picsum.photos/id/20/800/600', thumb: 'https://picsum.photos/id/20/400/300' },
		{ url: 'https://picsum.photos/id/21/800/600', thumb: 'https://picsum.photos/id/21/400/300' },
	];

	selectedImageIndex: number | null = null;

	get selectedImage(): string | null {
		return this.selectedImageIndex !== null ? this.images[this.selectedImageIndex].url : null;
	}

	openImage(index: number) {
		this.selectedImageIndex = index;
	}

	closeImage() {
		this.selectedImageIndex = null;
	}

	nextImage(event: Event) {
		event.stopPropagation();
		if (this.selectedImageIndex !== null) {
			this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
		}
	}

	prevImage(event: Event) {
		event.stopPropagation();
		if (this.selectedImageIndex !== null) {
			this.selectedImageIndex =
				(this.selectedImageIndex - 1 + this.images.length) % this.images.length;
		}
	}
}
