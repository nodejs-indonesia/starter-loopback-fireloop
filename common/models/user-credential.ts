import { Model } from '@mean-expert/model';
/**
 * @module Usercredential
 * @description
 * Write a useful Usercredential Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {},
  remotes: {}
})

class Usercredential {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }
}

module.exports = Usercredential;
