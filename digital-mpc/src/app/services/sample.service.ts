import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private samples: Map<number, Tone.Player> = new Map();

  async loadSample(padIndex: number) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*';
    fileInput.onchange = async (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const fileURL = URL.createObjectURL(file);
        const player = new Tone.Player(fileURL).toDestination();
        this.samples.set(padIndex, player);
        console.log(`Sample loaded on Pad ${padIndex + 1}`);
      }
    };
    fileInput.click();
  }

  playSample(padIndex: number) {
    const player = this.samples.get(padIndex);
    if (player) {
      player.start();
    } else {
      console.log(`No sample loaded on Pad ${padIndex + 1}`);
    }
  }
}
