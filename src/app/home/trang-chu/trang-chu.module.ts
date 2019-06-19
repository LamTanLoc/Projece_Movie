import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { TrangChuRoutingModule } from './trangchu-routing.module';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListDeXuatComponent } from './list-de-xuat/list-de-xuat.component';
import { ItemDeXuatComponent } from './item-de-xuat/item-de-xuat.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimSapChieuComponent } from './item-phim-sap-chieu/item-phim-sap-chieu.component';
import { ItemPhimDangChieuComponent } from './item-phim-dang-chieu/item-phim-dang-chieu.component';
import { FooterComponent } from './footer/footer.component';
import { PhoneAppComponent } from './phone-app/phone-app.component';





@NgModule({
  declarations: [TrangChuComponent, HeaderComponent, CarouselComponent, ListDeXuatComponent, ItemDeXuatComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent,ItemPhimSapChieuComponent,ItemPhimDangChieuComponent, FooterComponent, PhoneAppComponent],
  imports: [
    CommonModule,
    TrangChuRoutingModule
  ]
})
export class TrangChuModule { }
