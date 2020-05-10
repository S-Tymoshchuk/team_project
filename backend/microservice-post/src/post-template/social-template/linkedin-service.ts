import axios from 'axios';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {ISchedule} from './interface/schedule.interface';

@Injectable()
export class LinkedinTemplate {
  constructor(
      @InjectModel('Schedule')
      private scheduleModel: Model<ISchedule>,
  ) {
  }

  async linkedinMessage(data, post) {
    console.log(data)
    const postId = post[0]._id;
    const resData = {
      content: {
        contentEntities: [
          {
            entityLocation: `${post[0].image[0].link}`,
            thumbnails: [
              {
                resolvedUrl: `${post[0].image[0].link}`,
              },
            ],
          },
        ],
        title: `${post[0].title}`,
      },
      distribution: {
        linkedInDistributionTarget: {},
      },
      owner: `urn:li:person:${data[0].authorizId}`,
      subject: `${post[0].title}`,
      text: {
        text: `${post[0].body}`,
      },
    };
    const response = await axios('https://api.linkedin.com/v2/shares', {
      method: 'POST',
      data: resData,
      headers: {
        Authorization: `Bearer ${data[0].accessToken}`,
      },
    });

    if (response.data) {
      await this.updateSchedule(postId);
    } else {
      throw new console.error('сообщение не отправлено');
    }
  }

  async updateSchedule(id) {
    return this.scheduleModel.updateOne(
        {
          postId: id,
        },
        {$set: {status: 'resolve'}},
    );
  }
}
