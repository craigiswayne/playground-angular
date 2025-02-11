import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent {
  public form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public onSubmit(): void {
    if(this.form.invalid){
      console.log('Form is INVALID')
      return
    }

    this.form.disable()
    console.log('Form is valid')
  }
}
