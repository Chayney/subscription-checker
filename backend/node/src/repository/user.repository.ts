import { User } from "../domain/entity/user.entity";
import { AppDataSource } from "../config/appDataSource";

export const findUserByName = async (name: string) => {
    const db = AppDataSource.getInstance();
    const repository = db.getRepository(User);

    try {
        return await repository.findOne({
            where: { name }
        });
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to find user: ${error}`);
    }
};

export const createUser = async (user: User) => {
    const db = AppDataSource.getInstance();
    const repository = db.getRepository(User);

    try {
        return await repository.save(user);
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to create user: ${error}`);
    }
};