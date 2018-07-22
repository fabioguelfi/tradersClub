import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private crudService: CrudService
  ) { }

  public ngOnInit(): void { 
    this.crudService.findAll(``).subscribe(
      res => { },
      err => console.log(err),
      () => { }
    )
  }

  private findList(): void {
    this.router.navigateByUrl("findList");
  }

  private getAllResult(keyword: string): void {
    this.crudService.findAll(keyword).subscribe(
      res => { },
      err => console.log(err),
      () => { }
    )
  }
}
