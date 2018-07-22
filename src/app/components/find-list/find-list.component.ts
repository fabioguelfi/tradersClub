import { Router } from "@angular/router";
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
  public load: boolean = true;
  constructor(private crudService: CrudService, private router: Router) { }

  public ngOnInit(): void {
    this.crudService.cast.subscribe(res => {
      this.load = false;
      setTimeout(() => {
        this.load = true;
      }, 1500);
      this.allResultsList$ = res;
    });
  }

  public handlerRouterEdit(keyword: string): void {
    this.router.navigate([`edit`, encodeURI(keyword)]);
  }
}
