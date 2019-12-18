import { Component, OnInit } from "@angular/core";
import { merge, Observable, Subject } from "rxjs";
import { AlertMessage, FirstLibService } from "./first-lib.service";

@Component({
  selector: "lib-alert",
  template: `
    <div
      class="alert"
      *ngIf="alertMessage$ | async as alertMessage"
      [ngStyle]="{ background: alertMessage.color }"
    >
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
    </div>
  `,
  styleUrls: []
})
export class FirstLibComponent implements OnInit {
  alertMessage$: Observable<AlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: FirstLibService) {}

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}
