import { Component } from '@angular/core';
import { SequencerService } from 'src/app/services/sequencer.service';
import { SampleService } from '../../services/sample.service';

@Component({
  selector: 'app-pad-grid',
  templateUrl: './pad-grid.component.html',
  styleUrls: ['./pad-grid.component.scss']
})
export class PadGridComponent {
  pads = Array.from({ length: 9 }, (_, i) => ({ id: i, name: null }));

  constructor(private sampleService: SampleService, private sequencerService: SequencerService) { }

  playPad(index: number) {
    this.sampleService.playSample(index);
  }

  loadSample(index: number, event: Event) {
    event.stopPropagation();
    this.sampleService.loadSample(index);
  }
}
