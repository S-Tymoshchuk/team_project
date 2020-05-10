
export interface IPost {
    id: string,
    time: string,
    title: string,
    body: string,
    fileId: string[],
    schedule: ISchedule
}
export interface ISchedule {
    providerId: string[],
    startsAt:string,
    notify:boolean,
    status:string
}
