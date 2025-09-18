
import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

import dotenv from 'dotenv';

dotenv.config();

//create a ratelimiter thath allows 100 request per 60 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"), 
});

export default ratelimit;