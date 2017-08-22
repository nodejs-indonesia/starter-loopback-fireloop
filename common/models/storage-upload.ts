import { Model } from '@mean-expert/model';
/**
 * @module Roomchat
 * @description
 * Write a useful Roomchat Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {},
  remotes: {}
})

class Storageupload {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }
}

module.exports = Storageupload;
