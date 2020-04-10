import { Template, TransformationConfig } from '../../../lib/Types';
import Component from '../../../lib/Component';
import Coordinates from '../../../lib/helpers/Coordinates';
import PropsContext from '../../../lib/PropsContext';
import Sprite, { SpriteProps } from '../../../lib/components/native/Sprite';

import hammerSprite from '../../assets/character/items/hammer.png';
import values from '../../values.json';

export type HammerProps = {
  position: number;
};

export default class Hammer extends Component<HammerProps> {
  protected template: Template = [
    {
      component: new Sprite(),
      position: (): Coordinates => new Coordinates(0, 0),
      props: (): SpriteProps => ({
        source: hammerSprite,
        width: 128 * values.character.size,
        height: 128 * values.character.size
      }),
      transform: (ctx: PropsContext<HammerProps>): TransformationConfig => {
        return {
          rotate: {
            angle: ctx.props.position * Math.PI * -0.55 + 0.25 * Math.PI,
            center: new Coordinates(
              (13.5 / 16) * 128 * values.character.size,
              (13.5 / 16) * 128 * values.character.size
            )
          }
        };
      }
    }
  ];
}
