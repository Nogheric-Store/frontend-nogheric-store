import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonComponent } from './components/button/button.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { SideBarFilterComponent } from './components/side-bar-filter/side-bar-filter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        AccordionComponent,
        BannerComponent,
        ButtonComponent,
        CardProductComponent,
        InputTextComponent,
        SideBarFilterComponent,
        NavBarComponent
    ],
    declarations: [
        HeaderComponent,
        AccordionComponent,
        BannerComponent,
        ButtonComponent,
        CardProductComponent,
        InputTextComponent,
        SideBarFilterComponent,
        NavBarComponent
    ],
})
export class SharedModule { }
