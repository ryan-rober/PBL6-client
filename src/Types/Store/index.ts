import { AuthState } from "./auth"
import { CourseState } from "./course"
import { GlobalState } from "./global"

export type ActionCallback = {
    done?: () => {},
    error?: () => {},
}

export type Payload = {
    id?: string | number,
    data?: any,
    params?: any, 
    callback?: ActionCallback
}

export type Action = {
    type: string,
    payload: any,
    error?: any,
}

export type Store = {
    global: GlobalState,
    registrationCourses: CourseState,
    auth: AuthState
}