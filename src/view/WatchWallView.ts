import { formatGMT } from "../utils/textUtils";

export class WatchWallView {
    onIncreaseTimezoneButtonClick: () => void = () => {};
    onDecreaseTimezoneButtonClick: () => void = () => {};
    onCreateClockClick: () => void = () => {};
    getTimezone: () => number = () => 0;

    initNewWatch(watchNumber: number) {
      const watchWrapper = document.createElement('div');
      watchWrapper.id = 'watch-wrapper-' + watchNumber;
      watchWrapper.className = 'watch-wrapper';
      watchWrapper.innerHTML = `
      <div id="buttons-${watchNumber}" class="buttons"></div>
      <div id="watch-${watchNumber}" class="watch">
        <div class="button-labels">
          <div>+</div>
          <div style="margin-left: 25px">MODE</div>
          <div>LIGHT</div>
          <div>X</div>
        </div>
        <div id="watch-display-${watchNumber}" class="watch-display"></div>
      </div>
      `;

      const watches = document.getElementById('watches');
      watches.appendChild(watchWrapper);
  }

  initRender(): void {
    this.renderGMT();

    const increaseGMT = document.getElementById('increase-gmt');
    increaseGMT.onclick = this.onIncreaseTimezoneButtonClick;

    const decreaseGMT = document.getElementById('decrease-gmt');
    decreaseGMT.onclick = this.onDecreaseTimezoneButtonClick;

    const addClock = document.getElementById('add-clock');
    addClock.onclick = this.onCreateClockClick;
  }

  renderGMT(): void {
    const gmt = document.getElementById('gmt');
    gmt.textContent = formatGMT(this.getTimezone());
  }
}