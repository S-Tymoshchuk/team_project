import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';

@Injectable()
export class AppService {

    login(createUserDto: CreateUserDto) {
        return createUserDto;
    }
}
