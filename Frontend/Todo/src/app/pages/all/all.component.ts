import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  todos: any[] = [];
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getAllTodos(localStorage.getItem('token')).subscribe((data: any) => this.todos = data);
  }

}
