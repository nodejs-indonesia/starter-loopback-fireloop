import { Model } from '@mean-expert/model';
/**
 * @module Userphoto
 * @description
 * Write a useful Userphoto Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {},
  remotes: {}
})

class Userphoto {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }
}

module.exports = Userphoto;
