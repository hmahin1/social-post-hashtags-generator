import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
@Injectable()
export class AppService {
  openai;
  constructor() {

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY, // api key of openai
    });
    this.openai = new OpenAIApi(configuration);
  }
  
  async generateHashtags(input) {
    try {
      const postType = input.postType;
      const content = input.content;
      const inputPrompt = `Generate hashtags of ${postType} for ${content} with best keywords`;
      const completion = await this.openai.createCompletion({
        "model": 'text-davinci-003',
        "prompt": inputPrompt,
        "temperature": 0.1,
        "max_tokens": 1000,
        "n": 1
      });
      console.log(completion,'cpommm')

      return {code:HttpStatus.FOUND, data: completion?.data.choices?.[0]?.text}
    }
    catch (error) {
      if (error.response) {
        console.log(error.response.status, 'statusss');
        console.log(error.response.data, 'dataaaaaaaaa');
        throw new HttpException(error.response.data, HttpStatus.BAD_REQUEST);
      } else {
        console.log(error.message);
        throw new HttpException(error.message, HttpStatus.BAD_GATEWAY);
      }
    }
  }
  async generatePost(input) {
    try {
      const postType = input.postType;
      const content = input.content;
      const inputPrompt = `Generate ${postType} post for ${content} with best keywords`;
      const completion = await this.openai.createCompletion({
        "model": 'text-davinci-003',
        "prompt": inputPrompt,
        "temperature": 0.1,
        "max_tokens": 1000,
        "n": 1
      });
      return {code:HttpStatus.FOUND, data: completion?.data.choices?.[0]?.text}
      
    }
    catch (error) {
      if (error.response) {
        console.log(error.response.status, 'statusss');
        console.log(error.response.data, 'dataaaaaaaaa');
        throw new HttpException(error.response.data, HttpStatus.BAD_REQUEST);
      } else {
        console.log(error.message);
        throw new HttpException(error.message, HttpStatus.BAD_GATEWAY);
      }
    }
  }
}
