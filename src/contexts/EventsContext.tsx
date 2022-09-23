import { createContext, ReactNode, useState } from "react";


interface EventProviderProps {
    children: ReactNode;
}

interface EventProps {
    eventName: string;
    eventDescription: string;
    eventDate: string;
    eventTime: string;
}

const EventContext = createContext(undefined);

export function EventProvider({ children }: EventProviderProps) {
    const [eventData, setEventData] = useState()

    return (
        <EventContext.Provider value={{eventData, setEventData}}>
            {children}
        </EventContext.Provider>
    )
}

export {EventContext}