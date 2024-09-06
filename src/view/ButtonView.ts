export class ButtonView {
  private buttons: HTMLElement;

  constructor(buttonsId: string) {
    this.buttons = document.getElementById(buttonsId);
  }

  onLightModeButtonClick: () => void = () => {};
  onIncreaseButtonClick: () => void = () => {};
  onSwitchModeButtonClick: () => void = () => {};

  render(): void {
    this.buttons.innerHTML = '';

    const lightModeButton = document.createElement('button');
    lightModeButton.textContent = 'LIGHT';
    lightModeButton.onclick = this.onLightModeButtonClick;
    this.buttons.appendChild(lightModeButton);

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.onclick = this.onIncreaseButtonClick;
    this.buttons.appendChild(increaseButton);

    const switchModeButton = document.createElement('button');
    switchModeButton.textContent = 'MODE';
    switchModeButton.onclick = this.onSwitchModeButtonClick;
    this.buttons.appendChild(switchModeButton);
  }
}
