import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public people: Person[];

  constructor(private api: ApiService ) {
    this.api.people.subscribe(peo => {
        this.people = peo;
      });
   }

  ngOnInit() {

  }

}
