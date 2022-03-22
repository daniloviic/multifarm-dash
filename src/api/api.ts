import axios, { AxiosInstance, AxiosError } from 'axios';

// Errors
import { APIError } from './error';

// Utils
import { isEmpty } from '../utils';

class API {
  /**
   * Axios instance
   */
  public instance: AxiosInstance;

  /**
   * Initializes the axios intance.
   */
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 1000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Translates Axios error to domain API Error.
   * @param error - Axios error.
   * @returns API error.
   */
  handleError(error: AxiosError): APIError {
    let message = error.message;
    if (!error.isAxiosError && isEmpty(message)) {
      message = 'Request failed.';
    }
    return new APIError(error.message);
  }

  /**
   * Determines if the given response is an error.
   * @param response - Any object.
   * @returns Boolean of truth.
   */
  isError(response: any): response is APIError {
    return response instanceof APIError;
  }
}

export const api = new API();
