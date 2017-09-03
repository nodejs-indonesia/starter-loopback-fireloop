import { Model } from '@mean-expert/model';
/**
 * @module Map
 * @description
 * Write a useful Map Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {},
  remotes: {}
})

class Map {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }
}

module.exports = Map;
