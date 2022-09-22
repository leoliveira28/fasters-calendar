import { createContext, ReactNode, useState } from "react";


interface DatePickerProviderProps {
    children: ReactNode;
}

const DatePickerContext = createContext(undefined);

function DatePickerProvider({ children }: DatePickerProviderProps) {
    const [dateValue, setDateValue] = useState()

    return (
        <DatePickerContext.Provider value={{dateValue, setDateValue}}>
            {children}
        </DatePickerContext.Provider>
    )
}

export {DatePickerContext, DatePickerProvider}