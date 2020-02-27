import Store from '../../lib/store/Store';

export enum Screens {
  Start,
  Game,
  Help,
  GameOver,
  Cosmetics
}

type OnReturnFunction = () => void;

export type ScreensStoreContent = {
  active: Screens;
  onReturn: OnReturnFunction;
};

export default class ScreensStore extends Store<ScreensStoreContent> {
  public constructor() {
    super('screens', {
      active: Screens.Start,
      onReturn: (): void => {}
    });
  }

  public setScreen(newScreen: Screens): void {
    this.update((oldState: ScreensStoreContent) => ({
      ...oldState,
      active: newScreen
    }));
  }

  public setOnReturn(onReturn: OnReturnFunction): void {
    this.update((oldState: ScreensStoreContent) => ({
      ...oldState,
      onReturn: onReturn
    }));
  }

  public resetOnReturn(): void {
    this.update((oldState: ScreensStoreContent) => ({
      ...oldState,
      onReturn: (): void => {}
    }));
  }
}
