/* @flow */

// NPM
import chai from 'chai';
import cap from 'chai-as-promised';

// Internal
import PromiseEmitter from '../../src/utilities/PromiseEmitter';

// Globals
const expect = chai.expect;
chai.use(cap);

describe('utilities/PromiseEmitter', () => {
  it('Should be able to declare events', () => {
    const instance = new PromiseEmitter();
    instance.declareEvent('someEvent');
    expect(instance.getDefinedEvents())
      .to.deep.eql(['someEvent']);
  });

  it('Should be able to re-declare existing events silently', () => {
    const instance = new PromiseEmitter();
    instance.declareEvent('someEvent');
    instance.declareEvent('someEvent');
    expect(instance.getDefinedEvents())
      .to.deep.eql(['someEvent']);
  });

  it('Should return declared events in sort-order', () => {
    const instance = new PromiseEmitter();
    instance.declareEvent('someEvent');
    instance.declareEvent('anotherEvent');
    instance.declareEvent('someEventLater');
    expect(instance.getDefinedEvents())
      .to.deep.eql(['anotherEvent', 'someEvent', 'someEventLater']);
  });
});
