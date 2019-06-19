import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-item-de-xuat',
  templateUrl: './item-de-xuat.component.html',
  styleUrls: ['./item-de-xuat.component.scss']
})
export class ItemDeXuatComponent implements OnInit {

  @Input() phim;
  constructor() { }

  ngOnInit() {
  }

  muaVe() {
    alert("ahihi đồ chó !!!");
  }

}
