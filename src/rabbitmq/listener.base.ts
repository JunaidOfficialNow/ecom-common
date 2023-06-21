import { Channel, ConsumeMessage} from "amqplib";

export abstract class RabConsumer {
  protected abstract queueName: string;
  abstract onMessage(data: any, msg: ConsumeMessage): Promise<void>;

  constructor(protected channel: Channel) {}

  consume() {
    try {
      this.channel.consume(this.queueName, async (msg: ConsumeMessage | null) => {
        if (msg) {
          const data = JSON.parse(msg.content.toString());
          await this.onMessage(data, msg);
        }
     })
     console.log("Event received");
    } catch (error) {
      console.log('Error while consuming');
      throw error;
    }

  }





}