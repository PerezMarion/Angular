import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() init!: Client;
  @Output() onSubmitEvent = new EventEmitter<Client>();

  public form!: FormGroup;

  public states = Object.values(StateClient)

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      state: [this.init.state, Validators.required],
      tva: [this.init.tva, Validators.required],
      name: [this.init.name, Validators.required],
      totalCaHt: [this.init.totalCaHt, Validators.required],
      comment: [this.init.comment, Validators.required],
    })
  }

  public onSubmit() {
    this.onSubmitEvent.emit(this.form.value);
  }

}