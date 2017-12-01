const BASE_URL = 'http://www.tothegump.com:3000';

export const getUrl = (endpoint: string): string => {
    return `${BASE_URL}${endpoint}`;
};
