import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableSection } from '../../components/table-section/table-section';

@Component({
	selector: 'app-table',
	imports: [TableSection],
	templateUrl: './table.html',
	styleUrl: './table.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table {}
