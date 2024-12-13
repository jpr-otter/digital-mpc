import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ControlsComponent } from './components/controls/controls.component'; // Import the component
import { KeyMappingComponent } from './components/key-mapper/key-mapper.component'; // Adjust path
import { PadGridComponent } from './components/pad-grid/pad-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyMappingComponent,
    ControlsComponent,
    PadGridComponent // Declare the component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
