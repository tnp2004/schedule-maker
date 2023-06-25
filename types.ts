type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export type Task = {
    [K in Day]: Subject[]
}

export interface TaskData {
    day: Day
    id: string;
    subject: string;
    room: string;
    time: Time;
}

interface Subject {
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