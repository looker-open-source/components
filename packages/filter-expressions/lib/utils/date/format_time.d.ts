export interface TimeFormatProps {
    hour: number;
    minute?: number;
    meridiem?: string;
}
export declare const allowedTimeInputValues: RegExp;
export declare const meridiemFrom24HourTime: (hour: number) => "AM" | "PM";
/**
 * Takes an object of time segments and returns a formatted
 * 12 hour time string
 */
export declare const displayTimeAsIs: ({ hour, minute, meridiem, }: TimeFormatProps) => string;
/**
 * Given an TimeFormatProps object it will convert to a 12 hour format.
 * ex. {hour: 14, minute: 0, meridiem: ''}  will return "2:00 PM"
 */
export declare const formatAndDisplayTime: ({ hour, minute, meridiem, }: TimeFormatProps) => string;
/**
 * Given an TimeFormatProps object it will convert to a 24 hour format.
 * ex. {hour: 2, minute: 0, meridiem: 'pm'} will return { hour: '14', minute: '00', meridiem: 'pm'}
 */
export declare const get24HourTime: ({ hour, minute, meridiem, }: TimeFormatProps) => {
    hour: number;
    minute: number;
    meridiem: string;
};
export declare const parseTimeInput: (inputValue: string) => TimeFormatProps;
/**
 * Tests if the time value is correctly formatted. The only acceptable format is as follows
 * HH:MM (AM | PM)
 * @param input : string
 */
export declare const isTimeAndFormatAccurate: (input: string) => boolean;
