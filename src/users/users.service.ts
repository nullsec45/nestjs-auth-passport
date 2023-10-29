import { Injectable } from '@nestjs/common';

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    password: string
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "Fajar",
            username: "fajarganteng",
            email: "ramafajar805@gmail.com",
            password: "nosecure"
        }
    ];
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

}
