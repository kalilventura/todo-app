import { Router } from '@angular/router';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serivce: DataService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])],
      date: [new Date().toJSON().substring(0, 10), Validators.required]
    });
  }

  ngOnInit(): void { }

  submit() {
    this.serivce.postTodo(this.form.value, localStorage.getItem('token')).subscribe(res => {
      this.router.navigateByUrl('/');
    }, err => console.error(err));
  }

}
