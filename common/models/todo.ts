import { Model } from '@mean-expert/model';
/**
 * @module Todo
 * @description
 * Write a useful Todo Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {},
  remotes: {}
})

class Todo {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) { }
}

module.exports = Todo;
