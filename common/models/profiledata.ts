import { Model } from '@mean-expert/model';
/**
 * @module Profiledata
 * @description
 * Write a useful Profiledata Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {},
  remotes: {}
})

class Profiledata {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }
}

module.exports = Profiledata;
