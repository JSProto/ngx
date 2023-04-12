import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core'

import { config } from './example'

@Component({
  selector: 'form-example',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormlyModule],
})
export class FormComponent {
  form = new FormGroup({})
  model: any = {}
  options: FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = config
  submit() {
    alert(JSON.stringify(this.model))
  }
}
