import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer nFbkm4dZ0oYJtWbMdZnBmoJGA6ZqX0RKbkEiPqTmqP9CNQHG916FQHiWTG1f0zDNzvGoviXT71SeAjOMLQqpxuPvzF_Aubfm9VM734Arzoh4C8kzgAalp7WroYQLX3Yx',
  },
});
