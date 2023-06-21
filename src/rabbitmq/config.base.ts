import amqp , {Channel, Connection} from'amqplib';

export abstract class RabbitMQConfig {
 abstract RabUrl: string;
 protected _channel: Channel | undefined;
 protected connection: Connection | undefined;

 abstract configRabbitMq(channel:  Channel): Promise<void>;

 get channel() {
  if (!this._channel) {
    throw new Error('Cannot get channel before successful connection');
  }
  return this._channel
 }

 async initialize() {
  try {
    if (!this.RabUrl) {
      throw new Error('RabUrl is required');
    }
    this.connection = await amqp.connect(this.RabUrl);
    this._channel = await this.connection.createChannel();
    await this.configRabbitMq(this._channel);
    console.log('Connected to RabbitMQ');
  } catch (error) {
    this.connection?.close();
    throw error;
  }

 }

}