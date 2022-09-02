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
      name: [this.init.name],
      totalCaHt: [this.init.totalCaHt],
      tva: [this.init.tva],
      comment: [this.init.comment],
      state: [this.init.state],
      id: [this.init.id]
    })
  }

  public onSubmit() {
    this.onSubmitEvent.emit(this.form.value);
  }

}