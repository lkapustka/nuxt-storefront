type useFetchType = typeof useFetch;

export const useApiFetch: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig();

  options.baseURL = config.public.apiBaseURL;
  return useFetch(path, options);
};
