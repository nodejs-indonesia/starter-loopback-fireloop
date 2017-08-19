import { Model } from '@mean-expert/model';
/**
 * @module Maps
 * @description
 * Write a useful Maps Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {},
  remotes: {}
})

class Maps {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }
}

module.exports = Maps;
