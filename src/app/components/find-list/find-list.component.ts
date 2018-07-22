import { CrudService } from "./../../services/crud.service";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-find-list",
  templateUrl: "./find-list.component.html",
  styleUrls: ["./find-list.component.css"]
})
export class FindListComponent implements OnInit {
  public allResultsList$;

  constructor(private crudService: CrudService) { }

  public ngOnInit(): void {
    this.crudService.cast.subscribe(res => {
      this.allResultsList$ = res;
    });
  }
}
