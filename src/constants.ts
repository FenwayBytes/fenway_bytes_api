interface IError {
    code: number;
    message: String;
}

export const BAD_REQUEST: IError = {
    code: 404,
    message: 'Bad Request'
};