export type WatchMode = 'editHoursMode' | 'editMinutesMode' | 'uneditableMode';

export class ButtonModel {
  private mode: WatchMode = 'uneditableMode';
  private listeningToClicks = false;
  private clickCount = 0;

  getMode(): WatchMode {
    return this.mode;
  }

  getListeningToClicks(): boolean {
    return this.listeningToClicks;
  }

  getClickCount(): number {
    return this.clickCount;
  }
  
  setMode(mode: WatchMode): void {
    this.mode = mode;
  }

  setListeningToClicks(listeningToClicks: boolean): void {
    this.listeningToClicks = listeningToClicks;
  }

  setClickCount(clickCount: number): void {
    this.clickCount = clickCount;
  }
}
