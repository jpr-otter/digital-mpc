import { Component } from '@angular/core';
import { SequencerService } from '../../services/sequencer.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  constructor(private sequencerService: SequencerService) { }

  record() {
    this.sequencerService.startRecording();
  }

  play() {
    this.sequencerService.playSequence();
  }

  stop() {
    this.sequencerService.stopPlayback();
  }
}
