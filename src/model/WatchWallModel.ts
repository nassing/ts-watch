import { Watch } from "../interface/Watch";

export class WatchWallModel {
  private watches: Watch[];
  private timezone: number;

  constructor() {
    this.watches = [];
    this.timezone = 0;
  }

  getTimezone(): number {
    return this.timezone;
  }

  setTimezone(timezone: number): void {
    this.timezone = timezone;
  }

  createWatch(watch: Watch): void {
    this.watches.push(watch);
  }

  removeWatch(watch: Watch): void {
    this.watches = this.watches.filter((w) => w !== watch);
  }

  getWatches(): Watch[] {
    return this.watches;
  }
}