import { AppDataSource } from "../datasource";
import { CreateNewsDto } from "../dto/create-news.entity";
import { UpdateNewsDto } from "../dto/update-news.entity";
import { News } from "../models/News.entity";

const repository = AppDataSource.getRepository(News);

export function getNews(page: number, size: number) {
    return repository.find({ skip: page * size, take: size });
}

export function getNewsById(id: number) {
    return repository.findOne({ where: { id } });
}

export function createNews({ text, title }: CreateNewsDto) {
    return repository.save({ text, title });
}

export function updateNews(id: number, { text, title }: UpdateNewsDto) {
    return repository.update(id, { text, title });
}

export function deleteNews(id: number) {
    return repository.delete(id);
}
