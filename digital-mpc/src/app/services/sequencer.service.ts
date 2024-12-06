import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SequencerService {
  private sequence: { pad: number; time: number }[] = [];
  private isRecording = false;
  private startTime: number = Date.now();

  private keyPadMapping: { [key: string]: number } = {};

  startRecording() {
    this.sequence = [];
    this.isRecording = true;
    this.startTime = Date.now();
    console.log('Recording started');
  }

  recordPad(padIndex: number) {
    if (this.isRecording) {
      const time = Date.now() - this.startTime;
      this.sequence.push({ pad: padIndex, time });
      console.log(`Pad ${padIndex} recorded at time ${time}`);
    }
  }

  playSequence() {
    if (this.sequence.length === 0) {
      console.log('No sequence to play');
      return;
    }

    console.log('Playing sequence...');
    this.sequence.forEach((event) => {
      setTimeout(() => {
        console.log(`Playing pad ${event.pad}`);
      }, event.time);
    });
  }

  stopPlayback() {
    this.isRecording = false;
    console.log('Playback or recording stopped');
  }

  triggerPadByKey(key: string): void {
    const padIndex = this.keyPadMapping[key];
    if (padIndex !== undefined) {
      console.log(`Triggered pad ${padIndex} with key "${key}"`);
      this.recordPad(padIndex);
    } else {
      console.log(`Key "${key}" is not mapped to any pad`);
    }
  }

  mapKeyToPad(key: string, padIndex: number): void {
    this.keyPadMapping[key] = padIndex;
    console.log(`Mapped key "${key}" to pad ${padIndex}`);
  }

  getMappings(): { [key: string]: number } {
    return this.keyPadMapping;
  }
}
