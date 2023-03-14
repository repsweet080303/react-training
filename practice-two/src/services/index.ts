// Axios
import axios from 'axios';

// Constants
import API_URL from '@/constants/apiUrl';
import ENDPOINT_API from '@/constants/apiEndpoint';
import { API_MESSAGES_ERROR } from '@/constants/messages';

// Interface
import IUserResponse from '@/types/interface';

// Config baseURL for Axios
axios.defaults.baseURL = API_URL;

// Define endpoint for User API
const userURL = ENDPOINT_API.USER_API;

/**
 * function getUsers get data from Json server
 * @returns {Object} data - transmission data
 */
const getUsers = async <T>(): Promise<IUserResponse<T>> => {
  try {
    const response = await axios.get(userURL);

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: API_MESSAGES_ERROR.GET_API,
    };
  }
};

export default getUsers;
