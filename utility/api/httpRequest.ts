import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import 'async';
type ResultProps = {
  id: number, 
  type: string,  
  mobile: string, 
  password: string,
  username: string, 
  lastname: string,
  email: string,  
  representativeMobile: string
  signupDate: string, 
  branchRoot: string, 
  branchParent: string, 
  myBranchCode: string, 
  accessedMobiles: [],
}




async function fetch<T>(type: 'get' | 'post' | 'put' | 'delete', url: string, params = {}) {
  // State variables for data, loading, and error
  var data  
  let loading = false;
  let error = null;


  // Function to fetch data
  // const fetchData = async () => {
    try {
      if (type === 'get') {
        const response: AxiosResponse<T> = await axios.get(url, params);
        data = response.data;
      } else if (type === 'post') {
        const response: AxiosResponse<T> = await axios.post(url, params);
        data = response.data
      } else if (type === 'put') {
        const response: AxiosResponse<T> = await axios.put(url, params);
        data = response.data
      } else if (type === 'delete') {
        const response: AxiosResponse<T> = await axios.delete(url, params);
        data = response.data
      } else {
        throw new Error('Invalid API request type');
      }
    } catch (err) {
      error = 'Error getting the data';
      console.error(err); // Log the actual error for debugging
    } finally {
      // setLoading(false); // Update loading state after request (regardless of success/failure)
    }
  // };

  // Call fetchData on initial render (mimics useEffect behavior)
  // fetchData();

  // Return the API data and state variables
  return { data, loading, error };
}

export default fetch;
