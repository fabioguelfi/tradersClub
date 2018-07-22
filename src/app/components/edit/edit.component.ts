import { CrudService } from './../../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public keyword: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.keyword = decodeURI(this.activatedRoute.snapshot.url[1].path);
    this.crudService.findAll(this.keyword).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => { }
    )
  }


}
