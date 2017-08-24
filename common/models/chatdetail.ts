import { Model } from '@mean-expert/model';
/**
 * @module Chatdetail
 * @description
 * Write a useful Chatdetail Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {},
  remotes: {}
})

class Chatdetail {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }
}

module.exports = Chatdetail;
