export interface Task {
    day: string
    id: string;
    subject: string;
    room: string;
    time: Time;
}

interface Time {
    from: string
    to: string
}