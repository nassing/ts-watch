export type WatchMode = 'editHoursMode' | 'editMinutesMode' | 'uneditableMode';

export class WatchButtonsModel {
  private mode: WatchMode = 'uneditableMode';
  private isListeningToClicks = false;
  private clickCount = 0;

  getMode(): WatchMode {
    return this.mode;
  }

  getIsListeningToClicks(): boolean {
    return this.isListeningToClicks;
  }

  getClickCount(): number {
    return this.clickCount;
  }
  
  setMode(mode: WatchMode): void {
    this.mode = mode;
  }

  setIsListeningToClicks(isListeningToClicks: boolean): void {
    this.isListeningToClicks = isListeningToClicks;
  }

  setClickCount(clickCount: number): void {
    this.clickCount = clickCount;
  }
}
