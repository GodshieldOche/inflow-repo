import { Environment, Paddle } from '@paddle/paddle-node-sdk';

const paddle = new Paddle(process.env.PADDLE_API_KEY!, {
  environment: process.env.NODE_ENV === 'production' ? Environment.production : Environment.sandbox,
});

export default paddle;
