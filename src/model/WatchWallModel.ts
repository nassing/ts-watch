import { Watch } from "../interface/Watch";

export class WatchWallModel {
  private watches: Watch[];
  private timezone: number;

  constructor() {
    this.watches = [];
    this.timezone = 0;
  }

  public  getTimezone(): number {
    return this.timezone;
  }

  public setTimezone(timezone: number): void {
    this.timezone = timezone;
  }

  public createWatch(watch: Watch): void {
    this.watches.push(watch);
  }

  public removeWatch(watch: Watch): void {
    this.watches = this.watches.filter((w) => w !== watch);
  }

  public getWatches(): Watch[] {
    return this.watches;
  }
}