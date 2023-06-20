import { Channel } from "amqplib";

export abstract class RabPublisher<T extends WithImplicitCoercion<string>> {
  protected abstract exchange: string;
  protected abstract routingKey: string;
  protected abstract options: Object | undefined;

  constructor(private channel: Channel) {}
  
  publish(data: T ) {
    try {
      if (!this.options) {
        this.options = {persistent: true};
      }
      this.channel.publish(this.exchange, this.routingKey, Buffer.from(data), this.options );
      console.log(`${this.exchange}, ${this.routingKey} published`);
    } catch (error) {
      console.log('Error while publishing event');
      throw error;    
    }
  }
}