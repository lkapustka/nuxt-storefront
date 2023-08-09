import { describe, beforeEach, afterEach, vi, it, expect } from 'vitest';
import { useApi } from 'composables/useApi';

describe('useApi', () => {
  const mockUseRuntimeConfig = vi.fn(() => ({
    public: {
      apiBaseURL: 'https://api.example.com',
    },
  }));

  beforeEach(() => {
    vi.restoreAllMocks();
    vi.stubGlobal('useRuntimeConfig', mockUseRuntimeConfig);
    vi.stubGlobal('useFetch', vi.fn());
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should use useRuntimeConfig', () => {
    const path = '/data';

    useApi(path);

    expect(useRuntimeConfig).toHaveBeenCalledTimes(1);
  });

  it('should set correct base URL in options', () => {
    const path = '/data';

    useApi(path);

    expect(useFetch).toHaveBeenCalledWith('/data', {
      key: path,
      baseURL: 'https://api.example.com',
    });
  });

  it('should set correct key in options', () => {
    const path = '/data';
    const options = {
      key: 'test',
    };

    useApi(path, options);
    expect(useFetch).toHaveBeenCalledTimes(1);
    expect(useFetch).toHaveBeenCalledWith('/data', {
      key: 'test',
      baseURL: 'https://api.example.com',
    });

    useApi(path);
    expect(useFetch).toHaveBeenCalledTimes(2);
    expect(useFetch).toHaveBeenCalledWith('/data', {
      key: path,
      baseURL: 'https://api.example.com',
    });
  });

  it('should call useFetch with correct path and options', () => {
    const path = '/data';
    const options = {
      lazy: true,
    };

    useApi(path, options);

    expect(useFetch).toHaveBeenCalledWith(path, {
      ...options,
      key: path,
      baseURL: 'https://api.example.com',
    });
  });
});
