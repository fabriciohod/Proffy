import { Request, Response } from 'express';
import db from '../database/connection';
import covertHourToMinutes from '../utils/covertHourToMinutes';

interface ScheduleItem
{
    week_day: number,
    from: string,
    to: string;
}

export default class ClassController
{
    async create (req: Request, res: Response)
    {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;
        const trx = await db.transaction();

        try {
            const insertedUserIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUserIds[0];
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });

            const class_id = insertedClassesIds[0];
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) =>
            {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: covertHourToMinutes(scheduleItem.from),
                    to: covertHourToMinutes(scheduleItem.to)
                };
            });

            await trx('class_schedule').insert(classSchedule);

            await trx.commit();
            return req.status(201).send();
        } catch (error) {
            trx.rollback();

            return req.status(400).json({
                error
            });
        }
    }
}