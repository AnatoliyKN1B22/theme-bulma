import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormSection } from '../../components/form-section/form-section';

@Component({
	selector: 'app-form',
	imports: [FormSection],
	templateUrl: './form.html',
	styleUrl: './form.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {}
