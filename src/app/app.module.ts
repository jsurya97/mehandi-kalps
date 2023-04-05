import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonService } from './services/common.service';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatInputModule,
    MatIconModule,
    SlickCarouselModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
