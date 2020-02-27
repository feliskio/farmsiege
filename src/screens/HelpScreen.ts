import Component from '../../lib/Component';
import { Template } from '../../lib/Types';
import Dialog, { DialogProps } from '../components/Dialog';
import Coordinates from '../../lib/helpers/Coordinates';
import Text, { TextProps } from '../../lib/components/native/Text';
import EventListener, { EventListenerProps } from '../../lib/components/logical/EventListener';
import Dimensions from '../../lib/helpers/Dimensions';
import ScreensStore from '../store/ScreensStore';
import Sprite, { SpriteProps } from '../../lib/components/native/Sprite';

import backButtonSprite from '../assets/ui/retry.png';

export type HelpScreenProps = {};

export default class HelpScreen extends Component<HelpScreenProps> {
  private goBack(): void {
    const screensStore = this.stores.screens as ScreensStore;
    screensStore.directContent.onReturn();
  }

  protected template: Template = [
    {
      component: new Dialog(),
      position: (): Coordinates => new Coordinates(500, 400),
      props: (): DialogProps => ({
        width: 600,
        height: 400
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 50, 400 + 75),
      props: (): TextProps => ({
        text: 'HOW TO PLAY',
        color: '#fff',
        size: 36
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 50, 400 + 125),
      props: (): TextProps => ({
        text: '• WASD/Arrow Keys to navigate',
        color: '#fff'
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 50, 400 + 150),
      props: (): TextProps => ({
        text: '• Press Space to clear the selected field (also harvesting crops)',
        color: '#fff'
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 50, 400 + 175),
      props: (): TextProps => ({
        text: '• Press V to plant a crop',
        color: '#fff'
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 50, 400 + 200),
      props: (): TextProps => ({
        text: '• Press C to fire gun',
        color: '#fff'
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 50, 400 + 250),
      props: (): TextProps => ({
        text: '• Earn points by',
        color: '#fff'
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 60, 400 + 275),
      props: (): TextProps => ({
        text: '- harvesting fully grown crops',
        color: '#fff'
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 60, 400 + 300),
      props: (): TextProps => ({
        text: '- Killing rabbits',
        color: '#fff'
      })
    },
    {
      component: new Text(),
      position: (): Coordinates => new Coordinates(500 + 50, 400 + 350),
      props: (): TextProps => ({
        text: '• The game ends once there are no own plants left on the playing field',
        color: '#fff'
      })
    },

    {
      component: new EventListener(),
      position: (): Coordinates => new Coordinates(650, 900),
      props: (): EventListenerProps => ({
        size: new Dimensions(300, 200),
        onClick: this.goBack
      })
    },
    {
      component: new Sprite(),
      position: (): Coordinates => new Coordinates(650, 900),
      props: (): SpriteProps => ({
        source: backButtonSprite,
        width: 300,
        height: 200
      })
    }
  ];
}
