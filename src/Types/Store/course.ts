import UserResponse from "@type/Response/UserResponse"

export type CourseState = {
    isLoading: boolean,
    error: any,
    courses: UserResponse[],
    course: UserResponse,
    pagination: any,
    filter: any,
    isSubmitting: boolean
}