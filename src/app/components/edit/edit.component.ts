import { CrudService } from "./../../services/crud.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  public keyword: string;
  public car: object;
  public carform: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.carform = this.createFormGroup();
  }

  ngOnInit() {
    this.keyword = decodeURI(this.activatedRoute.snapshot.url[1].path);
    this.crudService
      .findAll(this.keyword)
      .subscribe(res => (this.car = res), err => console.log(err), () => {});
  }

  public createFormGroup() {
    return new FormGroup({
      propsCar: new FormGroup({
        title: new FormControl(),
        model: new FormControl(),
        year: new FormControl(),
        color: new FormControl(),
        price: new FormControl(),
        km: new FormControl()
      })
    });
  }

  public revert(): void {
    this.carform.reset();
  }

  public onSubmit(car: object): void {
    // let result: any;
    // if (this.carform.touched) {
    //   result = this.carform.value.propsCar;
    // } else {
    //   result = car;
    // }
    const obj = Object.assign({} , {  ...car, ...this.carform.value.propsCar })
    console.log(obj);
  }
}
