/* @flow */

import PromiseEmitter from '../utilities/PromiseEmitter';

/**
 * The ConsumerBase is the default base type for transport
 * consumers. It defines the common events profile.
 */
export default class ConsumerBase extends PromiseEmitter {
  formatter : EbbFormatter;

  /**
   * Initialize the ConsumerBase
   */
  constructor(formatter : EbbFormatter) {
    super();
    this.formatter = for
    this.declareEvent('messageSet');
    this.declareEvent('message');
  }

  hasHandler() {
    return true;
  }

  /**
   * The processMessageSet operation is the consumers main
   * entry point, dispatching messages for execution.
   */
  async processMessageSet(messageSet) {
    const taskQueue = [];
    for (const msg of messageSet) {
      const messageType = this.formatter.decodeMessageType(msg.raw);
    }
  }

  /**
   * Process a single message.
   */
  async processSingleMessage(message) {

  }
}
