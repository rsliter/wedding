import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('details');
  this.route('accomodations');
  this.route('our-story');
  this.route('things-to-do');
  this.route('registry');
});

export default Router;
