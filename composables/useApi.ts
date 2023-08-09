type useFetchType = typeof useFetch;

export const useApi: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig();

  options.key = options.key ?? (path as string);
  options.baseURL = config.public.apiBaseURL;

  return useFetch(path, options);
};
