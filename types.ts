type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | string;

export type TSchedule = {
    [K in Day]: Subject[]
}

export interface TaskData {
    day: Day
    id: string;
    subject: string;
    room: string;
    time: Time;
}

export interface Subject {
    id: string;
    subject: string;
    room: string;
    time: Time;
}

interface Time {
    from: string
    to: string
}

export interface DispatchEvent {
    detail: any
}