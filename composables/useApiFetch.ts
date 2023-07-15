type useFetchType = typeof useFetch;

export const useApiFetch: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig();

  if (!options.key) {
    options.key = path as string;
  }
  options.baseURL = config.public.apiBaseURL;

  return useFetch(path, options);
};
