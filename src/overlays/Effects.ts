import { Template } from '../../lib/Types';
import Component from '../../lib/Component';
import Coordinates from '../../lib/helpers/Coordinates';
import Repeating, { RepeatingProps } from '../../lib/components/logical/Repeating';

import EffectsStore from '../store/EffectsStore';
import ScoreEffectData from '../store/effects/ScoreEffectData';
import SmokeData from '../store/effects/SmokeData';

import ScoreEffect, { ScoreEffectProps } from '../components/ScoreEffect';
import Smoke from '../components/Smoke';

type EffectsProps = {};

export default class Effects extends Component<EffectsProps> {
  protected template: Template = [
    // Raucheffekte
    {
      component: new Repeating(),
      position: (): Coordinates => new Coordinates(0, 0),
      props: (): RepeatingProps => {
        const effectsStore = <EffectsStore>this.stores.effects;

        return {
          list: effectsStore.content.smoke,
          component: (): Smoke => new Smoke(),
          position: (data: SmokeData): Coordinates => data.position,
          props: (): {} => ({})
        };
      }
    },

    // Punkteeffekte
    {
      component: new Repeating(),
      position: (): Coordinates => new Coordinates(0, 0),
      props: (): RepeatingProps => {
        const effectsStore = <EffectsStore>this.stores.effects;

        return {
          list: effectsStore.content.scores,
          component: (): ScoreEffect => new ScoreEffect(),
          position: (data: ScoreEffectData): Coordinates =>
            new Coordinates(data.position.x, data.position.y - data.verticalOffset),
          props: (data: ScoreEffectData): ScoreEffectProps => ({
            value: data.value
          })
        };
      }
    }
  ];
}
