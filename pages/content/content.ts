import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	category: string;
	date: string;
	image: string;
	transform?: string;
	transitionClass?: string;
}

@Component({
	selector: 'app-content',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './content.html',
	styleUrl: './content.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Content {
	searchQuery = signal('');
	selectedCategory = signal('All');

	categories = ['All', 'Design', 'Development', 'Business', 'Marketing'];

	posts = signal<BlogPost[]>([
		{
			id: 1,
			title: 'The Future of Web Design',
			excerpt: 'Exploring the latest trends in UI/UX and how they shape the digital landscape.',
			category: 'Design',
			date: 'Feb 5, 2026',
			image: 'https://picsum.photos/id/1/800/400',
		},
		{
			id: 2,
			title: 'Angular vs React in 2026',
			excerpt: 'A deep dive into the state of frontend frameworks and which one to choose.',
			category: 'Development',
			date: 'Feb 3, 2026',
			image: 'https://picsum.photos/id/2/800/400',
		},
		{
			id: 3,
			title: 'Scaling Your SaaS Product',
			excerpt: 'Key strategies for growing your business from prototype to enterprise.',
			category: 'Business',
			date: 'Jan 28, 2026',
			image: 'https://picsum.photos/id/3/800/400',
		},
		{
			id: 4,
			title: 'Modern CSS Techniques',
			excerpt: 'Leveraging CSS Grid, Flexbox, and new features to build robust layouts.',
			category: 'Development',
			date: 'Jan 20, 2026',
			image: 'https://picsum.photos/id/4/800/400',
		},
		{
			id: 5,
			title: 'Brand Identity Matters',
			excerpt: 'Why consistent branding is the foundation of any successful marketing campaign.',
			category: 'Marketing',
			date: 'Jan 15, 2026',
			image: 'https://picsum.photos/id/5/800/400',
		},
		{
			id: 6,
			title: 'Effective Remote Work',
			excerpt: 'Tools and habits that make distributed teams more productive and happy.',
			category: 'Business',
			date: 'Jan 10, 2026',
			image: 'https://picsum.photos/id/6/800/400',
		},
	]);

	filteredPosts = computed(() => {
		const query = this.searchQuery().toLowerCase();
		const category = this.selectedCategory();

		return this.posts().filter((post) => {
			const matchesSearch =
				post.title.toLowerCase().includes(query) ||
				post.excerpt.toLowerCase().includes(query);
			const matchesCategory = category === 'All' || post.category === category;
			return matchesSearch && matchesCategory;
		});
	});

	setCategory(category: string) {
		this.selectedCategory.set(category);
	}

	updateSearch(event: Event) {
		const target = event.target as HTMLInputElement;
		this.searchQuery.set(target.value);
	}

	// Tilt Logic
	onMouseMove(event: MouseEvent, id: number) {
		const card = event.currentTarget as HTMLElement;
		const rect = card.getBoundingClientRect();

		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateY = ((x - centerX) / centerX) * 15;
		const rotateX = -((y - centerY) / centerY) * 15;

		this.posts.update((posts) =>
			posts.map((p) =>
				p.id === id
					? {
							...p,
							transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
							transitionClass: '',
					  }
					: p
			)
		);
	}

	onMouseLeave(id: number) {
		this.posts.update((posts) =>
			posts.map((p) =>
				p.id === id
					? {
							...p,
							transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
							transitionClass: 'is-resetting',
					  }
					: p
			)
		);
	}
}
