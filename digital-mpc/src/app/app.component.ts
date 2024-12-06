import { Component, HostListener } from '@angular/core';
import { SequencerService } from './services/sequencer.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private sequencerService: SequencerService) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.sequencerService.triggerPadByKey(event.key);
  }
}