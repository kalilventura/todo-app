import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  logout() {
    this.afAuth.signOut();
  }

}
