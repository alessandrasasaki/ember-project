import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from 'ember-computed';

export default Component.extend({
    deployments: alias('model'),
    items: computed(function() {
        return [
            {symbol:'H', url:'home' }, 
            {symbol:'S', url:'search'},
            {symbol:'M', url:'messages'},
            {symbol:'N', url:'notifications'},
            {symbol:'P', url:'profile'}
        ];
    })
});
