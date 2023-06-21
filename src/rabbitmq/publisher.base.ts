import { Channel } from "amqplib";

export abstract class RabPublisher {
  protected abstract exchange: string;
  protected abstract routingKey: string;
  protected abstract options: Object | undefined;

  constructor(private channel: Channel) {}
  
  publish(data: any ) {
    try {
      if (!this.options) {
        this.options = {persistent: true};
      }
      const strData = String(data);
      this.channel.publish(this.exchange, this.routingKey, Buffer.from(strData), this.options );
      console.log(`${this.exchange}, ${this.routingKey} published`);
    } catch (error) {
      console.log('Error while publishing event');
      throw error;    
    }
  }
}