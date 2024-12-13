import { Component, OnInit } from '@angular/core';
import { SequencerService } from 'src/app/services/sequencer.service'; // Adjust the path as necessary

@Component({
  selector: 'app-key-mapper', // The component's tag name
  templateUrl: './key-mapper.component.html', // Path to the HTML template
  styleUrls: ['./key-mapper.component.scss'], // Path to the SCSS (or CSS) file
})
export class KeyMappingComponent implements OnInit {
  pads: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Pad numbers
  selectedPad: number | null = null; // Selected pad
  selectedKey: string = ''; // Entered key
  mappings: { key: string; pad: number }[] = []; // List of current mappings

  constructor(private sequencerService: SequencerService) { }

  ngOnInit(): void {
    this.updateMappings();
  }

  mapKey(): void {
    if (!this.selectedPad || !this.selectedKey) {
      alert('Please select a pad and enter a key.');
      return;
    }

    this.sequencerService.mapKeyToPad(this.selectedKey, this.selectedPad);
    this.updateMappings();
    alert(`Mapped key "${this.selectedKey}" to pad ${this.selectedPad}`);
    this.selectedKey = ''; // Reset the key input after mapping
  }

  updateMappings(): void {
    const keyPadMapping = this.sequencerService.getMappings();
    this.mappings = Object.entries(keyPadMapping).map(([key, pad]) => ({
      key,
      pad,
    }));
  }
}
