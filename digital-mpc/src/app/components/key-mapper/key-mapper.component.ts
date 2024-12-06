import { Component } from '@angular/core';
import { SequencerService } from 'src/app/services/sequencer.service';

@Component({
  selector: 'app-key-mapper',
  templateUrl: './key-mapper.component.html',
  styleUrls: ['./key-mapper.component.css'],
})
export class KeyMapperComponent {
  selectedPad: number | null = null;
  currentKey: string = '';

  constructor(private sequencerService: SequencerService) { }

  selectPad(index: number): void {
    this.selectedPad = index;
  }

  mapKeyToPad(): void {
    if (this.selectedPad !== null && this.currentKey) {
      this.sequencerService.mapKeyToPad(this.currentKey, this.selectedPad);
      this.selectedPad = null;
      this.currentKey = '';
    }
  }
}
